import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import ProductImage from "./product-image.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type: 'text'})
    name:string;

    @Column({type: 'text'})
    details:string;

    @Column({type: 'text'})
    categories:string;

    @Column({type: 'numeric'})
    price: number;

    @Column({type: 'numeric'})
    stock: number;

    @OneToMany(() => ProductImage, (productImage) => productImage.product, {
        cascade: true,
        eager: true,
      })
      images?: ProductImage[];
}