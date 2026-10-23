import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pedido } from '../../pedidos/entities/pedido.entity.js';

export enum EstadoEntrega {
  Pendiente = 'Pendiente',
  EnProceso = 'En proceso',
  Entregado = 'Entregado',
}

@Entity('entregas')
export class Entrega {
  @PrimaryGeneratedColumn('identity', { name: 'id_entrega' })
  id: number;

  @OneToOne(() => Pedido, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;

  @Column({ type: 'varchar', length: 255 })
  direccion: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  referencia: string | null;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'costo_entrega' })
  costoEntrega: number;

  @Column({ type: 'enum', enum: EstadoEntrega, name: 'estado_entrega' })
  estadoEntrega: EstadoEntrega;
}
