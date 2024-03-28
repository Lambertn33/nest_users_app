import { IsEmail, IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEnum(['FRONTEND', 'BACKEND', 'FULLSTACK'], { message: 'Enter valid role' })
  role: 'FRONTEND' | 'BACKEND' | 'FULLSTACK';
}
