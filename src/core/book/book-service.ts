import { IBook, Book } from './book';


export class BookService {
    constructor(private ref: Firebase) {}

    createBook(rawText: string): void {
        this.ref.push(new Book(rawText), (error: Error) => {
            if (error) {
                console.error('ERROR @ createBook :', error);
            }
        });
    }

    deleteTask(book: IBook): void {
        this.ref.child(book.key).remove((error: Error) => {
            if (error) {
                console.error('ERROR @ deleteBook :', error);
            }
        });
    }

    updateTask(book: IBook, changes: any): void {
        this.ref.child(book.key).update(changes, (error: Error) => {
            if (error) {
                console.error('ERROR @ updateBook :', error);
            }
        });
    }
}
