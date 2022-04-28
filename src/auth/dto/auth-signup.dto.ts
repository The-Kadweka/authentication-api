import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class AuthSignUpDto{

    @IsEmail()
    email:string;
    @IsString()
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message:
          'password must contain uppercase, lowercase, number and special character',
      })
    password:string;
    @IsString()
    firstName:string;
    @IsString()
    lastName:string
}