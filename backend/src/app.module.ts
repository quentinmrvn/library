import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    // Remplace par ton lien MongoDB Atlas ou garde localhost si tu as Mongo installé
    MongooseModule.forRoot(
      'mongodb+srv://morvanq_db_user:i7eteoKwy02Hmqu9@default.u5lpb3r.mongodb.net/',
    ),
    BooksModule,
  ],
})
export class AppModule {}
