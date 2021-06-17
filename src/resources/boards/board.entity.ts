import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'boards' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public title: string;

  @Column()
  public columns: string;
}
