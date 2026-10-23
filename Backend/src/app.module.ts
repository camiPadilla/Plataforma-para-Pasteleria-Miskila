import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ClientesModule } from './clientes/clientes.module.js';
import { PedidosModule } from './pedidos/pedidos.module.js';
import { ProductosModule } from './productos/productos.module.js';
import { InventarioModule } from './inventario/inventario.module.js';
import { DetallePedidoModule } from './detalle-pedido/detalle-pedido.module.js';
import { EntregasModule } from './entregas/entregas.module.js';

import { Cliente } from './clientes/entities/cliente.entity.js';
import { Pedido } from './pedidos/entities/pedido.entity.js';
import { DetallePedido } from './detalle-pedido/entities/detalle-pedido.entity.js';
import { Producto } from './productos/entities/producto.entity.js';
import { Inventario } from './inventario/entities/inventario.entity.js';
import { Entrega } from './entregas/entities/entrega.entity.js';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT ?? ''),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Cliente, Pedido, DetallePedido, Producto, Inventario, Entrega],
      synchronize: true,
    }),
    ClientesModule,
    PedidosModule,
    ProductosModule,
    InventarioModule,
    DetallePedidoModule,
    EntregasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
