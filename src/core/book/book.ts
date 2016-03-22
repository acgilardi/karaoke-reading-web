export interface IBook {
    title: string;
    rawText: string;
    selectedWordId: string;
    key?: string;
}

export class Book implements IBook {
    title: string;
    rawText: string;
    selectedWord: string = '';
    selectedWordId: string = 'word.0';
    //words: Array<String>;

    constructor(title: string, rawText: string) {
        this.title = title;
        this.rawText = rawText;
        //this.words = this.rawText.split(' ');
    }
}
