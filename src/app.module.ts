import { Module } from '@nestjs/common';
import { AppController } from './links/links.controller';
import { AppService } from './links/links.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkModule } from './links/links.module';

@Module({
  imports: [
    LinkModule,
    MongooseModule.forRoot('mongodb://localhost:27017/dbLinks'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
