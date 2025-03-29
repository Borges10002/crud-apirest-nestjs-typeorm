import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../../enums/role.enum';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id?: number;

  @Column({ length: 63 })
  nome: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'date', nullable: true })
  birthAt?: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;
}
