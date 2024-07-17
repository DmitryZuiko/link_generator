import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './links.service';
import { GenerateLinkDto } from './dto/generate-link.dto';

@Controller('links')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getMessage(@Param('id') id: string): Promise<string> {
    return this.appService.getMessage(id);
  }

  @Post('generate')
  generateLink(@Body() dto: GenerateLinkDto): Promise<string> {
    return this.appService.generateLink(dto);
  }
}
