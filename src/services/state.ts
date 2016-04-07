import { BookItem } from '../components/books/book-item/book-item';

export class State {
    currentBook: BookItem;

    constructor() {
    }

    setBook(book: BookItem): void {
        this.currentBook = book;
    }
}
