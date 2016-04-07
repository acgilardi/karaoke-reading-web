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
    //public bookText: string;
    //public selectedWordId: string;
    //public words: any;

    public book: IBook; //FirebaseListObservable<Object[]>;

    constructor() {
        this.book = new Book('', '');

        //var _this = this;
        //this.bookText = 'No Book Selected';
        //this.selectedWordId = 'word.0';
        //this.words = [];
        //this.book = angularFire.list('/book/a1');
        //this.book.add({hey: 'What'});
        //this.book.add('new');
        //console.log(this.book)


        //this.book.subscribe(function (changeData) {
        //    // If event type is 'value', changeData is a DataSnapshot
        //    // Otherwise, changeData is:
        //    // {
        //    //   snapshot: DataSnapshot,
        //    //   prevName: optional string of previous child location
        //    // }
        //
        //    console.log(changeData);
        //    //console.log(two);
        //    //console.log(three);
        //    //var curBook = changeData[0];
        //
        //    //console.log('CHANGED');
        //    //console.log(changeData);
        //    //console.log(curBook.bookText);
        //    //console.log(curBook.selectedWordId);
        //    //_this.bookText = curBook.bookText;
        //    //_this.selectedWordId = curBook.selectedWordId;
        //    //_this.words = _this.bookText.split(' ');
        //
        //    //this.words = this.bookText.split(' ');
        //    //        console.log('Book Selected: ' + this.bookText);
        //});
    }

    onBookSelected(book: IBook): void {
        console.log('Selected dude');
        console.log(book);
        this.book = book;
    }

    //clickWord(): void {
    //    //this.selectedWordId = event.target.id;
    //    //this.book.add({
    //    //    selectedWordId: this.selectedWordId,
    //    //    selectedWord: event.target.innerText.trim()
    //    //});
    //
    //    console.log(this.book);
    //    console.log('word clicked');
    //    //console.log(event.target.innerText.trim());
    //};
}
