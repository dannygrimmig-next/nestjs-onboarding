import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BandsModule } from './bands/bands.module';

@Module({
  imports: [UsersModule, BandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
