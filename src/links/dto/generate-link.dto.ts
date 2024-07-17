import { IsString, IsNotEmpty } from 'class-validator';

export class GenerateLinkDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}
