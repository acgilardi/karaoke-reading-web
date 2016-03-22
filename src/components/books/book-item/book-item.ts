import { Component, Input } from 'angular2/core';
import { IBook } from '../../../core/book/book';
import { BookService } from '../../../core/book/book-service';
//import { Autofocus } from 'directives/autofocus-directive';

//const styles: string = require('./book-item.scss');
const template: string = require('./book-item.html');


@Component({
  //directives: [
  //  Autofocus
  //],
  selector: 'book-item',
  //styles: [styles],
  template
})

export class BookItem {
  @Input() model: IBook;

  editing: boolean = false;
  title: string = '';

  constructor(private bookService: BookService) {}

  //selected(): void {
  //  if (this.editing) {
  //    console.log('Book Selected');
  //  }
  //}

  deleteBook(): void {
    this.bookService.deleteBook(this.model);
  }
}
