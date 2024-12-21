import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MinLength,
} from "class-validator";

export class RegisterRequest {
  @ApiProperty({
    description: "You can change this later",
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minLowercase: 1,
    minUppercase: 1,
  })
  password: string;
}
