import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

export enum BookStatus {
  TO_READ = 'À lire',
  READING = 'En cours',
  FINISHED = 'Terminé',
}

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ default: BookStatus.TO_READ })
  status: string;

  @Prop({ min: 0, max: 5, default: 0 })
  rating: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
