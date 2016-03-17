import { Component } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { BookStore } from '../../core/book/book-store';
import { BookList } from './book-list/book-list';

const template: string = require('./books.html');


@Component({
  directives: [
    BookList
  ],
  selector: 'books',
  template
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class Books {
  constructor(public bookStore: BookStore) {}
}
