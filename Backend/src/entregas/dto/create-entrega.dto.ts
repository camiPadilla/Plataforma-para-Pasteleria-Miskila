import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { EstadoEntrega } from '../entities/entrega.entity.js';

export class CreateEntregaDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt({ message: 'El id del pedido debe ser un número entero' })
  @Min(1, { message: 'El id del pedido debe ser mayor que cero' })
  readonly idPedido: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  @IsString({ message: 'La dirección debe ser de tipo cadena' })
  @MaxLength(255, { message: 'La dirección no puede tener más de 255 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly direccion: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: 'La referencia debe ser de tipo cadena' })
  @MaxLength(255, { message: 'La referencia no puede tener más de 255 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly referencia?: string;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El costo de entrega debe ser un número con hasta 2 decimales' },
  )
  @Min(0, { message: 'El costo de entrega no puede ser negativo' })
  readonly costoEntrega: number;

  @ApiProperty({ enum: EstadoEntrega })
  @IsEnum(EstadoEntrega, {
    message: 'El estado debe ser Pendiente, En proceso o Entregado',
  })
  readonly estadoEntrega: EstadoEntrega;
}
