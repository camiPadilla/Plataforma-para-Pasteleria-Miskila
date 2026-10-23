import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum EstadoPedido {
    Pendiente = 'Pendiente',
    EnProceso = 'En proceso',
    Entregado = 'Entregado',
}

export enum TipoPedido {
    EnLinea = 'En línea',
    Presencial = 'Presencial',
}

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn('identity', { name: 'id_pedido' })
    id: number;

    @Column({ type: 'int', name: 'id_cliente', nullable: true })
    idCliente: number;

    @Column({ type: 'date', name: 'fecha_pedido' })
    fechaPedido: Date;

    @Column({ type: 'date', name: 'fecha_entrega', nullable: true })
    fechaEntrega: Date | null;

    @Column({ type: 'enum', enum: TipoPedido, name: 'tipo_pedido' })
    tipoPedido: TipoPedido;
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @Column({ type: 'enum', enum: EstadoPedido })
    estado: EstadoPedido;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    // --- RELACIONES ---
    @ManyToOne('Cliente', (cliente: any) => cliente.pedidos, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'id_cliente' })
    cliente: any;

    @OneToMany('DetallePedido', (detalle: any) => detalle.pedido, { cascade: true })
    detalles: any[];
}