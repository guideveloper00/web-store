import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { County } from './county.entity';

@Entity()
export class MicroRegion {
  @Column()
  id: number;

  @PrimaryGeneratedColumn()
  idApp: number;

  @Column()
  nome: string;

  @OneToOne(() => County, (county) => county.microrregiao)
  county: County;
}
