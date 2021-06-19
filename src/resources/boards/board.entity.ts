import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'boards' })
export class BoardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  public title: string;

  @Column()
  public columns: string;
}
