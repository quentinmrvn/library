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
    <main className="min-h-screen p-8 max-w-5xl mx-auto" id="main-content">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          Bibliothèque
        </h1>
        <p className="sr-only">
          Gestion de votre collection personnelle de livres
        </p>
      </header>
      <AddBookForm onAdd={handleAddBook} />

      {books.length > 0 ? (
        <section aria-labelledby="list-title">
          <h2
            id="list-title"
            className="text-2xl font-semibold mb-6 text-slate-800"
          >
            Livres ({books.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                onStatusChange={updateStatus}
                onDelete={deleteBook}
              />
            ))}
          </div>
        </section>
      ) : (
        <div
          className="text-center py-20 rounded-xl border-2 border-dashed border-slate-300"
          role="status"
          aria-live="polite"
        >
          <p className="text-slate-500 text-lg">
            Votre bibliothèque est vide. Ajoutez votre premier livre ci-dessus !
          </p>
        </div>
      )}
    </main>
  );
}
