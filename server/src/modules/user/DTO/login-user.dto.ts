import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";


export class LoginUserDTO {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(45)
  email: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  password: string;
}