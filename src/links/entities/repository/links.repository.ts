import { Injectable, Logger } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { AbstractRepository } from '../../../database/abstract.repository';
import { Link } from '../schema/links.schema';

@Injectable()
export class LinksRepository extends AbstractRepository<Link> {
  protected readonly logger = new Logger(LinksRepository.name);

  constructor(
    @InjectModel(Link.name) linkModel: Model<Link>,
    @InjectConnection() connection: Connection,
  ) {
    super(linkModel, connection);
  }
}
