import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Proverbs {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    author: string;

    @Column()
    category: string;
}