import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('detalle_pedido')
export class DetallePedido {
    @PrimaryGeneratedColumn('identity', { name: 'id_detalle' })
    id: number;

    @Column({ type: 'int', name: 'id_pedido' })
    IdPedido: number;

    @Column({ type: 'int', name: 'id_producto' })
    IdProducto: number;

    @Column({ type: 'int' })
    Cantidad: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, name: 'precio_unitario' })
    PrecioUnitario: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, name: 'sub_total' })
    subTotal: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;   

    // --- RELACIONES ---
    @ManyToOne('Pedido', (pedido: any) => pedido.detalles, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_pedido' })
    pedido: any;

    @ManyToOne('Producto', (producto: any) => producto.detalles, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'id_producto' })
    producto: any;
}