import { Transform } from "class-transformer";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @Transform(params => {
        console.log(params);
        return params.value;
    })
    @IsString()
    @MinLength(2)
    @MaxLength(30)
    readonly name:string;

    @IsString()
    @IsEmail()
    @MaxLength(60)
    readonly email:string;

    @IsString()
    @Matches(/^[A-za-z\d!@#$%^&*()]{8,30}$/)
    readonly password:string;
}
