import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  public title: string;

  @Column()
  public order: string;

  @Column()
  public description: string;

  @Column()
  public userId: string;

  @Column()
  public boardId: string;

  @Column()
  public columnId: string;
}
