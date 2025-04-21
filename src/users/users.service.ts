import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class UsersService {

  // constructor(private  prisma:prismaService)
  constructor(
    private readonly prisma: DatabaseService,
    private readonly  mailerService: MailerService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // async  findOne(email: string) {
  //   await this.mailerService.sendCode(
  //     "welcome to our service",
  //     email
  //   )

  //   return `code sent to ${email}`
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
