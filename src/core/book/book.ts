export interface IBook {
    rawText: string;
    selectedWordId: string;
    key?: string;
}

export class Book implements IBook {
    rawText: string = '';
    selectedWordId: string = 'word.0';
    words: Array<String>;

    constructor(rawText: string) {
        this.rawText = rawText;
        this.words = this.rawText.split(' ');
    }
}
