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

  return (
    <form onSubmit={handleSubmit} className="bg-white py-4 flex">
      <input
        className="flex-1 min-w-[200px] border border-slate-200 p-3"
        placeholder="Titre du livre"
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
        required
      />
      <input
        className="flex-1 min-w-[200px] border border-slate-200 p-3"
        placeholder="Auteur"
        value={formData.author}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, author: e.target.value }))
        }
        required
      />
      <button className="bg-indigo-600 px-6 py-3 radius-O text-white hover:bg-indigo-700 transition-all active:scale-95">
        Ajouter
      </button>
    </form>
  );
}
