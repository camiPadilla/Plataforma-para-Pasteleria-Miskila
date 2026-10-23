import { Body, Controller, Post } from '@nestjs/common';
import { CreateEntregaDto } from './dto/create-entrega.dto.js';
import { EntregasService } from './entregas.service.js';

@Controller('entregas')
export class EntregasController {
  constructor(private readonly entregasService: EntregasService) {}

  @Post()
  create(@Body() createEntregaDto: CreateEntregaDto) {
    return this.entregasService.create(createEntregaDto);
  }
}
