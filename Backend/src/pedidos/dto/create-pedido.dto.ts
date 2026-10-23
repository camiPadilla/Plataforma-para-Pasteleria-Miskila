import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsEnum, IsInt, IsNumber, IsOptional, Min } from 'class-validator';
import { EstadoPedido, TipoPedido } from '../entities/pedido.entity.js';

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

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString({}, { message: 'La fecha de entrega debe tener un formato de fecha válido' })
  readonly fechaEntrega?: string | null;

  @ApiProperty({ enum: TipoPedido })
  @IsEnum(TipoPedido, { message: 'El tipo de pedido debe ser En línea o Presencial' })
  readonly tipoPedido: TipoPedido;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El total debe ser un número con hasta 2 decimales' })
  @Min(0, { message: 'El total no puede ser negativo' })
  readonly total: number;

  @ApiProperty({ enum: EstadoPedido })
  @IsEnum(EstadoPedido, { message: 'El estado debe ser Pendiente, En proceso o Entregado' })
  readonly estado: EstadoPedido;

}
