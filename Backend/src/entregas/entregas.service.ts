import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntregaDto } from './dto/create-entrega.dto.js';
import { Entrega } from './entities/entrega.entity.js';

@Injectable()
export class EntregasService {
  constructor(
    @InjectRepository(Entrega)
    private readonly entregasRepository: Repository<Entrega>,
  ) {}

  create(createEntregaDto: CreateEntregaDto): Promise<Entrega> {
    const { idPedido, ...datosEntrega } = createEntregaDto;
    const entrega = this.entregasRepository.create({
      ...datosEntrega,
      pedido: { id: idPedido },
    });

    return this.entregasRepository.save(entrega);
  }
}
