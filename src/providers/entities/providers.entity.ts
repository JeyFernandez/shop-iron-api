import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import ProviderImage from "./providers-image.entity";

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type: 'text'})
    name:string;

    @Column({type: 'text'})
    direction:string;

    @Column({type: 'text'})
    Gmail:string;

    @Column({type: 'numeric'})
    type_of_provider: string;


    @OneToMany(() => ProviderImage, (providerImage) => providerImage.povider, {
        cascade: true,
        eager: true,
      })
      images?: ProviderImage[];
}