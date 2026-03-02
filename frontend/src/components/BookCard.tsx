import React from "react";
import { Book, BookStatus } from "../types/books";

interface Props {
  book: Book;
  onStatusChange: (id: string, newStatus: BookStatus) => void;
  onDelete: (id: string) => void;
}

export default function BookCard({ book, onStatusChange, onDelete }: Props) {
  const statusColor =
    book.status === "Terminé"
      ? "bg-green-100 text-green-800"
      : book.status === "En cours"
        ? "bg-yellow-100 text-yellow-800"
        : "bg-gray-100 text-gray-800";

  return (
    <article
      className="border border-slate-400 p-4 shadow-sm flex flex-col justify-between"
      aria-labelledby={`title-${book._id}`}
    >
      <div>
        <h3
          id={`title-${book._id}`}
          className="font-bold text-lg text-slate-900"
        >
          {book.title}
        </h3>
        <p className="text-slate-700">
          <span className="sr-only">Auteur : </span>
          {book.author}
        </p>

        <p className="text-xs text-slate-400 mt-1" aria-hidden="true">
          Ref: {book._id}
        </p>

        <span
          className={`text-xs font-semibold px-2 py-1 rounded mt-2 inline-block border ${statusColor}`}
          role="status"
        >
          {book.status}
        </span>
      </div>

      <div className="mt-4 flex gap-2">
        {book.status !== "Terminé" && (
          <button
            onClick={() => onStatusChange(book._id, "Terminé")}
            className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            aria-label={`Marquer "${book.title}" comme terminé`}
          >
            Terminer
          </button>
        )}
        <button
          onClick={() => onDelete(book._id)}
          className="text-xs bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          aria-label={`Supprimer le livre "${book.title}"`}
        >
          Supprimer
        </button>
      </div>
    </article>
  );
}
