import { PartialType } from '@nestjs/swagger';
import { CreatePedidoDto } from './create-pedido.dto.js';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {}
