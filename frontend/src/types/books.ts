export type BookStatus = "À lire" | "En cours" | "Terminé";

export interface Book {
  _id: string;
  title: string;
  author: string;
  status: BookStatus;
  rating?: number;
  createdAt?: string;
}

export interface CreateBookDto {
  title: string;
  author: string;
  status?: BookStatus;
  rating?: number;
}

export type UpdateBookDto = Partial<CreateBookDto>;
