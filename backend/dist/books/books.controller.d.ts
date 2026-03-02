import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<import("./schemas/book.schema").Book>;
    findAll(): Promise<import("./schemas/book.schema").Book[]>;
    findOne(id: string): Promise<import("./schemas/book.schema").Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<import("./schemas/book.schema").Book | null>;
    remove(id: string): Promise<any>;
}
