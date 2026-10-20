import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsInt, IsNumber, Min } from 'class-validator';

export class CreateDetallePedidoDto {
  @ApiProperty()
  @IsDefined({ message: 'El id del pedido es obligatorio' })
  @Type(() => Number)
  @IsInt({ message: 'El id del pedido debe ser un número entero' })
  @Min(1, { message: 'El id del pedido debe ser mayor que cero' })
  readonly IdPedido: number;

  @ApiProperty()
  @IsDefined({ message: 'El id del producto es obligatorio' })
  @Type(() => Number)
  @IsInt({ message: 'El id del producto debe ser un número entero' })
  @Min(1, { message: 'El id del producto debe ser mayor que cero' })
  readonly IdProducto: number;

  @ApiProperty()
  @IsDefined({ message: 'La cantidad es obligatoria' })
  @Type(() => Number)
  @IsInt({ message: 'La cantidad debe ser un número entero' })
  @Min(1, { message: 'La cantidad debe ser al menos uno' })
  readonly Cantidad: number;

  @ApiProperty()
  @IsDefined({ message: 'El precio unitario es obligatorio' })
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El precio unitario debe ser un número con hasta 2 decimales' })
  @Min(0, { message: 'El precio unitario no puede ser negativo' })
  readonly PrecioUnitario: number;

  @ApiProperty()
  @IsDefined({ message: 'El subtotal es obligatorio' })
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El subtotal debe ser un número con hasta 2 decimales' })
  @Min(0, { message: 'El subtotal no puede ser negativo' })
  readonly subTotal: number;
}
