import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsDateString, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreatePedidoDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'El id del cliente debe ser un número entero' })
  @Min(1, { message: 'El id del cliente debe ser mayor que cero' })
  readonly idCliente?: number;

  @ApiProperty()
  @IsDateString({}, { message: 'La fecha del pedido debe tener un formato de fecha válido' })
  readonly fechaPedido: string;

  @ApiProperty()
  @IsDateString({}, { message: 'La fecha de entrega debe tener un formato de fecha válido' })
  readonly fechaEntrega: string;

  @ApiProperty()
  @Type(() => Number)
  @IsInt({ message: 'El tipo de pedido debe ser un número entero' })
  @Min(0, { message: 'El tipo de pedido no puede ser negativo' })
  readonly tipoPedido: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El total debe ser un número con hasta 2 decimales' })
  @Min(0, { message: 'El total no puede ser negativo' })
  readonly total: number;

  @ApiProperty()
  @Type(() => Number)
  @IsInt({ message: 'El estado debe ser un número entero' })
  @Min(0, { message: 'El estado no puede ser negativo' })
  readonly estado: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: 'Las observaciones deben ser de tipo cadena' })
  @MaxLength(255, { message: 'Las observaciones no pueden tener más de 255 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly observaciones?: string;
}
