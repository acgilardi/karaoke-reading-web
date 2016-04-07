import { Component, Input } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { AuthRouteHelper } from '../../core/auth/auth-route-helper';
import { IBook } from '../../core/book/book';

const template: string = require('./book-view.html');

@Component({
  selector: 'book-view',
  template
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class BookView {
  @Input() public book: IBook;

  constructor() {
    //this.book = new IBook;
  }

}
