import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrega } from './entities/entrega.entity.js';
import { EntregasController } from './entregas.controller.js';
import { EntregasService } from './entregas.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Entrega])],
  controllers: [EntregasController],
  providers: [EntregasService],
})
export class EntregasModule {}
