"use client";

import AddBookForm from "@/src/components/AddBookForm";
import BookCard from "@/src/components/BookCard";
import { useBooks } from "@/src/hooks/useBooks";

export default function Home() {
  const { books, loading, addBook, updateStatus, deleteBook } = useBooks();

  const handleAddBook = async (title: string, author: string) => {
    try {
      await addBook(title, author);
    } catch (err) {
      alert("Erreur lors de l'ajout");
    }
  };

  if (loading)
    return <div className="p-8 text-center animate-pulse">Chargement...</div>;

  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-600">
          Bibliothèque
        </h1>
      </header>

      <AddBookForm onAdd={handleAddBook} />

      {books.length ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onStatusChange={updateStatus}
              onDelete={deleteBook}
            />
          ))}
        </section>
      ) : (
        <div className="text-center py-15 rounded border-2 border-dashed border-gray-200">
          <p className="text-gray-400">Bibliothèque vide.</p>
        </div>
      )}
    </main>
  );
}
