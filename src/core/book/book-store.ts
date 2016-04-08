import { List } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { IBook, Book } from './book';


export class BookStore {
    books: ReplaySubject<List<any>> = new ReplaySubject(1);
    private list: List<any> = List();

    constructor(ref: Firebase) {
        ref.on('child_added', this.created.bind(this));
        ref.on('child_changed', this.updated.bind(this));
        ref.on('child_removed', this.deleted.bind(this));
        ref.once('value', () => this.emit());
    }

    get size(): number {
        return this.list.size;
    }

    private emit(): void {
        this.books.next(this.list);
    }

    private created(snapshot: FirebaseDataSnapshot): void {
        let key: string = snapshot.key();
        let index: number = this.findIndex(key);
        if (index === -1) {
            let temp: IBook = snapshot.val();
            let book = new Book(temp.title, temp.rawText, temp.selectedWord, temp.selectedWordId);
            book.key = key;
            book.init();
            this.list = this.list.push(book);
            this.emit();
        }
    }

    private deleted(snapshot: FirebaseDataSnapshot): void {
        let index: number = this.findIndex(snapshot.key());
        if (index !== -1) {
            this.list = this.list.delete(index);
            this.emit();
        }
    }

    private updated(snapshot: FirebaseDataSnapshot): void {
        let key: string = snapshot.key();
        let index: number = this.findIndex(key);
        if (index !== -1) {
            let temp: IBook = snapshot.val();
            let book = new Book(temp.title, temp.rawText, temp.selectedWord, temp.selectedWordId);
            book.key = key;
            book.init();
            this.list = this.list.set(index, book);
            this.emit();
        }
    }

    private findIndex(key: string): number {
        return this.list.findIndex((book: IBook) => {
            return book.key === key;
        });
    }
}
