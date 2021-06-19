import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'boards' })
export class BoardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  columns: string;
}
