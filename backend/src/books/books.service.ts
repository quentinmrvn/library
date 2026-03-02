import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
  async findOne(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).exec();
    if (!book) {
      throw new NotFoundException(`Livre #${id} introuvable`);
    }
    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book | null> {
    return this.bookModel
      .findByIdAndUpdate(id, updateBookDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.bookModel.findByIdAndDelete(id);
  }
}
