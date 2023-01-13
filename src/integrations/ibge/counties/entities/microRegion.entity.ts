import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { County } from './county.entity';
import { MesoRegion } from './mesoRegion.entity';

@Entity()
export class MicroRegion {
  @Column()
  id: number;

  @PrimaryGeneratedColumn()
  idApp: number;

  @Column()
  nome: string;

  @Column()
  mesorregionId: number;

  @OneToOne(() => County, (county) => county.microrregiao)
  county: County;

  @OneToOne(() => MesoRegion, (mesorregiao) => mesorregiao.microrregiao)
  mesorregiao: MesoRegion;
}
