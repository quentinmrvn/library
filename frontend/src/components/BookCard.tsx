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
    <div className="border border-gray-200 p-4 shadow-sm flex flex-col text-gray-500">
      <div>
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p>{book.author}</p>
        <p>{book._id}</p>
        <span
          className={`text-xs px-2 py-1 rounded mt-2 inline-block ${statusColor}`}
        >
          {book.status}
        </span>
      </div>

      <div className="mt-4 flex gap-2">
        {book.status !== "Terminé" && (
          <button
            onClick={() => onStatusChange(book._id, "Terminé")}
            className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-400"
          >
            Finir
          </button>
        )}
        <button
          onClick={() => onDelete(book._id)}
          className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
