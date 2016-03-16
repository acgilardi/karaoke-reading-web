import {Component} from 'angular2/core';
//import {AngularFire, FirebaseListObservable} from 'angularfire2';
//import * as Firebase from 'firebase';

//FIREBASE_PROVIDERS.push(defaultFirebase('https://yayday.firebaseio.com'));
//declare var Firebase: any;

const styles: string = require('./station-guide.scss');
const template: string = require('./station-guide.html');

@Component({
    selector: 'station-guide',
    styles: [styles],
    template
})
export class StationGuide {
    public bookText: string;
    public selectedWordId: string;
    public words: any;

    public book: any; //FirebaseListObservable<Object[]>;

    constructor(/*public angularFire: AngularFire*/) {
        //var _this = this;
        this.bookText = 'No Book Selected';
        this.selectedWordId = 'word.0';
        this.words = [];
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


    //private bookRef: FireBase = new Firebase("https://yayday.firebaseio.com/book/a1");

    clickWord(): void {
        //this.selectedWordId = event.target.id;
        //this.book.add({
        //    selectedWordId: this.selectedWordId,
        //    selectedWord: event.target.innerText.trim()
        //});

        console.log(this.book);
        console.log('word clicked');
        //console.log(event.target.innerText.trim());
    };
}
