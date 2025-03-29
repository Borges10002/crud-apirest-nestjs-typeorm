import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    nome: 'borges',
    email: 'borges10002@gmail.com',
    password: '$2b$10$Qu0VEfL1imSlGKAmzpX5VOFMC7lFFXAk3XW2Ryb1UB7xjTPM4dupe',
    birthAt: new Date(),
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    role: Role.Admin,
  },
  {
    nome: 'teste',
    email: 'teste@gmail.com',
    password: '$2b$10$Qu0VEfL1imSlGKAmzpX5VOFMC7lFFXAk3XW2Ryb1UB7xjTPM4dupe',
    birthAt: new Date(),
    id: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    role: Role.Admin,
  },
  {
    nome: 'teste2',
    email: 'teste2@gmail.com',
    password: '$2b$10$Qu0VEfL1imSlGKAmzpX5VOFMC7lFFXAk3XW2Ryb1UB7xjTPM4dupe',
    birthAt: new Date(),
    id: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    role: Role.Admin,
  },
];
