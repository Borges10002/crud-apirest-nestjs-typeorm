import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdateUserDTO } from './dto/update-put-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDTO) {
    if (
      await this.userRepository.exists({
        where: {
          email: data.email,
        },
      })
    ) {
      throw new NotFoundException(`Este e-mail ${data.email} já existe.`);
    }
    const salt = await bcrypt.genSalt();

    data.password = data.password;

    data.password = await bcrypt.hash(data.password, salt);

    const newUser = this.userRepository.create(data);
    return await this.userRepository.save(newUser);
  }

  async list() {
    return this.userRepository.find();
  }

  async show(id: number) {
    await this.exists(id);

    return this.userRepository.findOneBy({ id });
  }

  async update(
    id: number,
    { birthAt, email, nome, password, role }: UpdateUserDTO,
  ) {
    await this.exists(id);

    const salt = await bcrypt.genSalt();

    password = await bcrypt.hash(password, salt);

    await this.userRepository.update(id, {
      email,
      nome,
      password,
      birthAt: birthAt ? new Date(birthAt) : null,
      role,
    });

    return this.show(id);
  }

  async updatePartial(
    id: number,
    { birthAt, email, nome, password, role }: UpdatePatchUserDTO,
  ) {
    await this.exists(id);

    const data: any = {};

    if (birthAt) {
      data.birthAt = new Date(birthAt);
    }

    if (email) {
      data.email = email;
    }

    if (nome) {
      data.nome = nome;
    }

    if (password) {
      const salt = await bcrypt.genSalt();

      data.password = await bcrypt.hash(password, salt);
    }

    if (role) {
      data.role = role;
    }

    await this.userRepository.update(id, data);

    return this.show(id);
  }

  async delete(id: number) {
    await this.exists(id);

    await this.userRepository.delete({
      id,
    });

    return true;
  }

  async exists(id: number) {
    if (
      !(await this.userRepository.exists({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O usuário ${id} não existe.`);
    }
  }
}
