import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from 'angular2/core';
import { List } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { BookRow } from '../book-row/book-row';
import { BookService } from '../../../core/book/book-service';
import { IBook } from '../../../core/book/book';

//const styles: string = require('!raw!less!./book-list.less');
const template: string = require('./book-list.html');


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [BookRow],
    selector: 'book-list',
    //styles: [styles],
    template
})

export class BookList {
    @Input() public books: ReplaySubject<List<any>>;
    @Output() public bookSelected: EventEmitter<any> = new EventEmitter();

    constructor(private bookService: BookService) {}

    addBook(): void {
        this.bookService.createBook('Mouse and me 1', 'This is the book text');
    }

    onSelect(book: IBook): void {
        this.bookSelected.emit(book);
    }
}
