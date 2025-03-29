import { Role } from '../enums/role.enum';
import { UpdateUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdateUserDTO = {
  birthAt: '2000-01-01',
  email: 'borges10002@gmail.com',
  nome: 'Joao Rangel',
  password: '123456',
  role: Role.User,
};
