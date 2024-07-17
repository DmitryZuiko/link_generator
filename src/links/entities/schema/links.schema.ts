import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';

@Schema({ versionKey: false })
export class Link extends AbstractDocument {
  @Prop({ required: true })
  message: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
