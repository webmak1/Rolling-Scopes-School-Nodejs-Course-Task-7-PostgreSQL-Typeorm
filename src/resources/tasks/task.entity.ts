import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  public title: string;

  @Column()
  public order: number;

  @Column()
  public description: string;

  @Column({ nullable: true })
  public userId: string;

  @Column()
  public boardId: string;

  @Column({ nullable: true })
  public columnId: string;
}
