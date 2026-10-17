import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('inventario')
export class Inventario {
    @PrimaryGeneratedColumn('identity', { name: 'id_inventario' })
    id: number;

    @Column({ type: 'int', name: 'id_producto' })
    idProducto: number;

    @Column({ type: 'int', name: 'stock_actual' })
    stockActual: number;

    @Column({ type: 'int', name: 'stock_minimo' })
    stockMinimo: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    // --- RELACIONES ---
    @ManyToOne('Producto', (producto: any) => producto.inventarios, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_producto' })
    producto: any;
}