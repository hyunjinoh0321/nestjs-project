import * as uuid from 'uuid';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        private emailService:EmailService,
        @InjectRepository(UserEntity) private usersRepository:Repository<UserEntity>,
        ){}

    async createUser(name:string, email:string,password:string) {
        const userExist = await this.checkUserExists(email);

        if (userExist) {
            throw new UnprocessableEntityException('Duplicated Email address.');
        }

        const signupVerifyToken = uuid.v1();

        await this.saveUser(name, email, password, signupVerifyToken);
        await this.sendMemberJoinEmail(email, signupVerifyToken);
    }

    async createUser2(name:string, email:string,password:string) {
        const signupVerifyToken = uuid.v1();
        await this.saveUser(name, email, password, signupVerifyToken);
    }

    private async checkUserExists(eamilAddress:string){
        const user = await this.usersRepository.findOne({
            where: {email:eamilAddress}
        });

        return user !== undefined;
    }

    private async saveUser(name:string, email:string, password:string, signupVerifyToken:string){
        const user = new UserEntity();
        user.id = name;
        user.name = name;
        user.email = email;
        user.password = password;
        user.signupVerifyToken = signupVerifyToken;

        await this.usersRepository.save(user);
    }

    private async sendMemberJoinEmail(email:string, signupVerifyToken:string) {
        await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
        return;
    }

    async verifyEmail(signupVerifyToken:string): Promise<string>{
        throw new Error('Method not implemented.');
    }

    async login(email:string, password:string): Promise<string> {
        throw new Error('Method not implemented.');
    }

    async getAllUserInfo(): Promise<UserEntity[]> {
        const allUser = await this.usersRepository.find();
        
        return allUser;
    }

    async getUserInfo(userId:string): Promise<UserEntity> {
        const user = await this.usersRepository.findOne({
            where: {id :userId}
        });
        
        return user;
    }
}

