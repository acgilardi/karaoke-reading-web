import { Component, Output, EventEmitter } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { AuthRouteHelper } from '../../core/auth/auth-route-helper';
import { BookStore } from '../../core/book/book-store';
import { BookList } from './book-list/book-list';
import { IBook } from '../../core/book/book';

const template: string = require('./books.html');

@Component({
  directives: [BookList],
  selector: 'books',
  template
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class Books {
  @Output() public bookSelected: EventEmitter<any> = new EventEmitter();

  constructor(public bookStore: BookStore) {};

  onBookSelected(book: IBook): void {
    console.log(book);
    this.bookSelected.emit(book);
  }
}
