export interface Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string | null;
}

export interface BookState {
  books: Book[];
  booksLoading: boolean;
  booksError: string | null;
}
