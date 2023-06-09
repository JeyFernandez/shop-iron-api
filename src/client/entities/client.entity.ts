import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({type:'text'})
    name:string;

    @Column({type:'text'})
    lastName:string;

    @Column({type:'text'})
    direction:string;

    @Column({type:'text'})
    email:string
    
    @Column({type:'text'})
    dni:string;
    
}
