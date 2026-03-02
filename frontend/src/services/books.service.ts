import { Book, CreateBookDto, UpdateBookDto } from "../types/books";
import request from "./api";

export const booksService = {
  getAll: async (): Promise<Book[]> => {
    return request<Book[]>("/books");
  },

  getOne: async (id: string): Promise<Book> => {
    return request<Book>(`/books/${id}`);
  },

  create: async (book: CreateBookDto): Promise<Book> => {
    return request<Book>("/books", {
      method: "POST",
      body: JSON.stringify(book),
    });
  },

  update: async (id: string, book: UpdateBookDto): Promise<Book> => {
    return request<Book>(`/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify(book),
    });
  },

  delete: async (id: string): Promise<void> => {
    return request<void>(`/books/${id}`, {
      method: "DELETE",
    });
  },
};
