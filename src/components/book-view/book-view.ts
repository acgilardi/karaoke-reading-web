import { Component, Input } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { AuthRouteHelper } from '../../core/auth/auth-route-helper';
import { IBook } from '../../core/book/book';
import { BookService } from '../../core/book/book-service';

const styles: string = require('!raw!less!./book-view.less');
const template: string = require('./book-view.html');

@Component({
  selector: 'book-view',
  styles: [styles],
  template
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class BookView {
  @Input() public book: IBook;

  constructor(private bookService: BookService) {

  }

  doIt(): void {
    console.log(this.book.words);
  }

  clickWord(event: any): void {
    let selectedWordId = event.target.id;
    let selectedWord = event.target.innerText.trim();

    this.bookService.updateBook(this.book, {selectedWordId, selectedWord});

    this.book.selectedWordId = selectedWordId;
    this.book.selectedWord = selectedWord;
  }
}
