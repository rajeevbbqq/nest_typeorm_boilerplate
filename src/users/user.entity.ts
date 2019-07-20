import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 75 })
  firstName: string;

  @Column({ type: 'varchar', length: 75 })
  lastName: string;

  @Column({ type: 'varchar', unique: true, length: 150 })
  email: string;

  @Column('varchar')
  password: string;
}
