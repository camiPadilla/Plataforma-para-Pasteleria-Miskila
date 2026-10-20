import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsInt, Min } from 'class-validator';

export class CreateInventarioDto {
  @ApiProperty()
  @IsDefined({ message: 'El id del producto es obligatorio' })
  @Type(() => Number)
  @IsInt({ message: 'El id del producto debe ser un número entero' })
  @Min(1, { message: 'El id del producto debe ser mayor que cero' })
  readonly idProducto: number;

  @ApiProperty()
  @IsDefined({ message: 'El stock actual es obligatorio' })
  @Type(() => Number)
  @IsInt({ message: 'El stock actual debe ser un número entero' })
  @Min(0, { message: 'El stock actual no puede ser negativo' })
  readonly stockActual: number;

  @ApiProperty()
  @IsDefined({ message: 'El stock mínimo es obligatorio' })
  @Type(() => Number)
  @IsInt({ message: 'El stock mínimo debe ser un número entero' })
  @Min(0, { message: 'El stock mínimo no puede ser negativo' })
  readonly stockMinimo: number;
}
