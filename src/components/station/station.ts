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
}
