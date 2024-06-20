import { Body, Controller, Get, Inject, Param, Post, Query, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { identity } from 'rxjs';
import { UserEntity } from './user.entity';
import { WINSTON_MODULE_PROVIDER} from 'nest-winston';
import { Logger as WinstonLogger } from 'winston';
 
@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger,
    ){}

    @Post()
    async createUser(@Body() dto : CreateUserDto) : Promise<void> {
        const { name, email, password } = dto;
        console.log(dto);
        this.printWinstonLog(dto);

        await this.usersService.createUser2(name, email, password);
    }
    
    @Post('/email-verify')
    async verifyEmail(@Query() dto:VerifyEmailDto): Promise<string> {
        const {signupVerifyToken} = dto;
        return await this.usersService.verifyEmail(signupVerifyToken);
    }

    @Post('/login')
    async login(@Body() dto: UserLoginDto) : Promise<string> {
        const {email, password} = dto;

        return await this.usersService.login(email, password);
    }

    @Get()
    async getAllUser() : Promise<UserEntity[]> {
        const userList = await this.usersService.getAllUserInfo();
        return Object.assign({
          data: userList,
          statusCode: 200,
          statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
        });        
    }

    @Get('/:userId')
    async getUserInfo(@Param('userId') id: string): Promise<UserEntity> {
      const foundUser = await this.usersService.getUserInfo(id);
      return Object.assign({
        data: foundUser,
        statusCode: 200,
        statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
      });
    } 
    
    @Post('/test')
    async test(@Body() dto : CreateUserDto) : Promise<void> {
        this.printWinstonLog(dto);
    }

    private printWinstonLog(dto) {
        
        this.logger.error('error:', dto);


    }
}

