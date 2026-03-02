import { useState } from "react";

export default function AddBookForm({
  onAdd,
}: {
  onAdd: (title: string, author: string) => Promise<void>;
}) {
  const [formData, setFormData] = useState({ title: "", author: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.author.trim()) return;

    await onAdd(formData.title, formData.author);
    setFormData({ title: "", author: "" });
  };

  const inputClasses =
    "w-full border border-slate-400 p-3 focus:ring-2 focus:ring-indigo-600 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white py-4 flex flex-wrap gap-4"
      aria-label="Ajouter un nouveau livre"
    >
      <div className="flex-1 min-w-[200px]">
        <label htmlFor="title" className="sr-only">
          Titre du livre
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className={inputClasses}
          placeholder="Titre du livre"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          required
          aria-required="true"
        />
      </div>

      <div className="flex-1 min-w-[200px]">
        <label htmlFor="author" className="sr-only">
          Auteur
        </label>
        <input
          id="author"
          name="author"
          type="text"
          className={inputClasses}
          placeholder="Auteur"
          value={formData.author}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, author: e.target.value }))
          }
          required
          aria-required="true"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 px-8 py-3 text-white font-bold hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all active:scale-95"
      >
        Ajouter
      </button>
    </form>
  );
}
