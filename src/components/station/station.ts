import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Component} from 'angular2/core';

const template: string = require('./station.html');
const style: string = require('!raw!less!./station.less');

@Component({
    selector: 'station',
    styles: [style],
    template,
    directives: [ROUTER_DIRECTIVES]
})
export class Station {
    innerHeight: number = window.innerHeight;

    onResize (event: any): void {
        //this.width += 100;
        console.log(innerHeight);
        this.innerHeight = window.innerHeight;
    }

    ////changeHeight(): string {
    ////    console.log(this.innerHeight.toString() + 'px');
    ////    return this.innerHeight.toString() + 'px';
    ////}
    //
    //ngOnInit() {
    //    //window.onresize = this.onWindowLoadOrResize;
    //    //this.onWindowLoadOrResize();
    //    $(window).on('load resize', function() {
    //        $('#main-book-image').css('height', window.innerHeight);
    //    });
    //}
    ////private onWindowLoadOrResize() {
    ////    this.innerHeight = window.innerHeight;
    ////}


}
