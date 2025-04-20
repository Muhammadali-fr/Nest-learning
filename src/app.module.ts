import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { MailerService } from './mailer/mailer.service';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [UsersModule, DatabaseModule, MailerModule],
  controllers: [AppController],
  providers: [AppService, MailerService],
})
export class AppModule {}
