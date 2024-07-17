import { Module } from '@nestjs/common';
import { AppController } from './links.controller';
import { AppService } from './links.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './entities/schema/links.schema';
import { LinksRepository } from './entities/repository/links.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, LinksRepository],
  exports: [LinksRepository],
})
export class LinkModule {}
