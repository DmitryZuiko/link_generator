import { BadRequestException, Injectable } from '@nestjs/common';
import { GenerateLinkDto } from './dto/generate-link.dto';
import { LinksRepository } from './entities/repository/links.repository';
import { ErrorMessage } from './entities/enum/errorMessages.enum';

@Injectable()
export class AppService {
  constructor(private readonly linksRepository: LinksRepository) {}

  async getMessage(id: string): Promise<string> {
    const link = await this.linksRepository.findOne({ _id: id });
    if (!link) throw new BadRequestException(ErrorMessage.BadLink);

    await this.linksRepository.delete({ _id: id });

    return link.message;
  }

  async generateLink({ message }: GenerateLinkDto): Promise<string> {
    if (!message) throw new BadRequestException(ErrorMessage.MessageRequired);

    const document = await this.linksRepository.create({ message });

    return `http://localhost:3000/api/links/${document._id}`;
  }
}
