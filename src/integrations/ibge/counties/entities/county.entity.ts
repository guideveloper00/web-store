import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class County {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;
}
