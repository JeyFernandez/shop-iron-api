import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Provider } from './providers.entity';

@Entity()

export default class ProviderImage{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    url:string;

    @ManyToOne(()=>Provider,(provider)=> provider.images,
    {onDelete: 'CASCADE'}
    )
    povider: Provider
}