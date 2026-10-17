import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn('identity', { name: 'id_cliente' })
    id: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'varchar', length: 100 })
    apellido: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    telefono: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    direccion: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    // --- RELACIONES ---
    @OneToMany('Pedido', (pedido: any) => pedido.cliente)
    pedidos: any[];
}