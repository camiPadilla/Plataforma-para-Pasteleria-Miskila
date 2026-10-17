import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn('identity', { name: 'id_pedido' })
    id: number;

    @Column({ type: 'int', name: 'id_cliente', nullable: true })
    idCliente: number;

    @Column({ type: 'date', name: 'fecha_pedido' })
    fechaPedido: Date;

    @Column({ type: 'date', name: 'fecha_entrega' })
    fechaEntrega: Date;

    @Column({ type: 'int', name: 'tipo_pedido' })
    tipoPedido: number; 
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @Column({ type: 'int' })
    estado: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    observaciones: string;

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