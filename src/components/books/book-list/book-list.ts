import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';
import { RouterLink, RouteParams } from 'angular2/router';
import { List } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { BookItem } from '../book-item/book-item';
//import { TaskListFilterPipe } from './task-list-filter-pipe';

//const styles: string = require('./book-list.scss');
const template: string = require('./book-list.html');


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    RouterLink,
    BookItem
  ],
  //pipes: [
  //  TaskListFilterPipe
  //],
  selector: 'book-list',
  //styles: [styles],
  template
})

export class BookList {
  @Input() books: ReplaySubject<List<any>>;

  filter: string;

  constructor(params: RouteParams) {
    this.filter = params.get('filter');
  }
}
