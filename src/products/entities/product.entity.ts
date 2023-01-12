import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  status: boolean;

  @Column()
  quantity: number;

  @Column()
  @CreateDateColumn()
  created_at: string;

  @Column()
  @UpdateDateColumn()
  updated_at: string;

  @Column()
  @DeleteDateColumn()
  deleted_at: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted product with id: ' + this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated product with id: ' + this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed product with id: ' + this.id);
  }
}
