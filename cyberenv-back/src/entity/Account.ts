import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    login: string

    @Column()
    password: string

}
