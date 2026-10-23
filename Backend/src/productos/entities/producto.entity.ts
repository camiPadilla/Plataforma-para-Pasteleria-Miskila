import { Check, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('productos')
@Check('CHK_productos_stock_no_negativo', '"stock" >= 0')
export class Producto {
    @PrimaryGeneratedColumn('identity', { name: 'id_producto' })
    id: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'text', nullable: true })
    descripcion: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio: number;

    @Column({ type: 'int', default: 0 })
    stock: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    // --- RELACIONES ---
    @OneToMany('DetallePedido', (detalle: any) => detalle.producto)
    detalles: any[];

}