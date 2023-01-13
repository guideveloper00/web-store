import { MicroRegion } from './microRegion.entity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class County {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  microrregionId: number;

  @OneToOne(() => MicroRegion, (microrregiao) => microrregiao.county)
  microrregiao: MicroRegion;
}
