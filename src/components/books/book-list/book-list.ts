import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';
//import { RouterLink, RouteParams } from 'angular2/router';
import { List } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { BookItem } from '../book-item/book-item';
//import { TaskListFilterPipe } from './task-list-filter-pipe';
import { BookService } from '../../../core/book/book-service';

const styles: string = require('./book-list.scss');
const template: string = require('./book-list.html');


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    BookItem
  ],
  //pipes: [
  //  TaskListFilterPipe
  //],
  selector: 'book-list',
  styles: [styles],
  template
})

export class BookList {
  @Input() books: ReplaySubject<List<any>>;
  //books: any = ['one', 'two', 'three'];

  //filter: string;

  constructor(private bookService: BookService) {
    //this.filter = params.get('filter');
  }

  addBook(): void {
    this.bookService.createBook('Mouse and me 1', 'This is the book text');
  }
}
