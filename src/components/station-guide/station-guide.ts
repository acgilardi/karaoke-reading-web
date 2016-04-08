import {Component} from 'angular2/core';
import { Books } from '../books/books';
import { BookView } from '../book-view/book-view';
import { IBook } from '../../core/book/book';
import { Book } from '../../core/book/book';

//const styles: string = require('./station-guide.less');
const template: string = require('./station-guide.html');

@Component({
    selector: 'station-guide',
    //styles: [styles],
    template,
    directives: [
        Books,
        BookView
    ],
})
export class StationGuide {
    public book: IBook;

    constructor() {
        this.book = new Book('', '', '', 'word.0');
    }

    onBookSelected(book: IBook): void {
        this.book = book;
    }
}
