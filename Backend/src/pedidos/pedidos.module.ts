import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosController } from './pedidos.controller.js';
import { PedidosService } from './pedidos.service.js';
import { Pedido } from './entities/pedido.entity.js';
import { ClientesModule } from '../clientes/clientes.module.js'; // <-- Importar el módulo

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido]),
    ClientesModule, // <-- Añadir aquí para que cargue los metadatos de Cliente
  ],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}