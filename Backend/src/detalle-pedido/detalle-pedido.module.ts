import { Module } from '@nestjs/common';
import { DetallePedidoService } from './detalle-pedido.service.js';
import { DetallePedidoController } from './detalle-pedido.controller.js';

@Module({
  controllers: [DetallePedidoController],
  providers: [DetallePedidoService],
})
export class DetallePedidoModule {}
