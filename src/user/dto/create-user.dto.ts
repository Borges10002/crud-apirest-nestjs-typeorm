import {
  IsEmail,
  IsEnum,
  IsISO8601,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateUserDTO {
  @IsString()
  nome: string;

  @IsEmail()
  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minNumbers: 0,
    minLowercase: 0,
    minUppercase: 0,
    minSymbols: 0,
  })
  password: string;

  @IsOptional()
  @IsISO8601() // Use the correct decorator for ISO8601 date format
  birthAt: string;

  @IsOptional()
  @IsEnum(Role)
  role: number;
}
