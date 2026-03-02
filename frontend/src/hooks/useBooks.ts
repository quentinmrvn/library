import { useState, useEffect, useCallback } from "react";
import { Book, BookStatus } from "@/src/types/books";
import { booksService } from "@/src/services/books.service";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = useCallback(async () => {
    try {
      const books = await booksService.getAll();
      setBooks(books);
    } catch (error) {
      console.error("Erreur de chargement:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  const addBook = async (title: string, author: string) => {
    const newBookData = { title, author, status: "À lire" as BookStatus };
    const newBook = await booksService.create(newBookData);
    setBooks((books) => [...books, newBook]);
  };

  const updateStatus = async (id: string, newStatus: BookStatus) => {
    const previousBooks = [...books];
    setBooks((books) =>
      books.map((book) =>
        book._id === id ? { ...book, status: newStatus } : book,
      ),
    );

    try {
      await booksService.update(id, { status: newStatus });
    } catch (error) {
      setBooks(previousBooks);
      throw error;
    }
  };

  const deleteBook = async (id: string) => {
    const previousBooks = [...books];
    setBooks((books) => books.filter((book) => book._id !== id));

    try {
      await booksService.delete(id);
    } catch (error) {
      setBooks(previousBooks);
      throw error;
    }
  };

  return { books, loading, addBook, updateStatus, deleteBook };
}
