import { HydratedDocument } from 'mongoose';
export type BookDocument = HydratedDocument<Book>;
export declare enum BookStatus {
    TO_READ = "\u00C0 lire",
    READING = "En cours",
    FINISHED = "Termin\u00E9"
}
export declare class Book {
    title: string;
    author: string;
    status: string;
    rating: number;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, (import("mongoose").Document<unknown, any, Book, any, import("mongoose").DefaultSchemaOptions> & Book & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Book, any, import("mongoose").DefaultSchemaOptions> & Book & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Book>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, import("mongoose").Document<unknown, {}, Book, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    author?: import("mongoose").SchemaDefinitionProperty<string, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rating?: import("mongoose").SchemaDefinitionProperty<number, Book, import("mongoose").Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Book>;
