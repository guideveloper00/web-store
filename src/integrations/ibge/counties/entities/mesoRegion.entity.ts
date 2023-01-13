import { MicroRegion } from './microRegion.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MesoRegion {
  @Column()
  id: number;

  @PrimaryGeneratedColumn()
  idApp: number;

  @Column()
  nome: string;

  @OneToOne(() => MicroRegion, (microrregiao) => microrregiao.mesorregiao)
  microrregiao: MicroRegion;
}
