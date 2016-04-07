import { Component, Input } from 'angular2/core';
import { IBook } from '../../../core/book/book';
import { BookService } from '../../../core/book/book-service';

//const styles: string = require('./book-row.less');
const template: string = require('./book-row.html');


@Component({
  selector: 'book-row',
  //styles: [styles],
  template
})

export class BookRow {
  @Input() book: IBook;

  constructor(private bookService: BookService) {}

  deleteBook(): void {
    this.bookService.deleteBook(this.book);
  }
}
