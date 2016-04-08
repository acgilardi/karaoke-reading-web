export interface IBook {
    title: string;
    rawText: string;
    selectedWord: string;
    selectedWordId: string;
    key?: string;
    words: any;

    init(): void;
}

export class Book implements IBook {
    title: string;
    rawText: string;
    selectedWord: string;
    selectedWordId: string;
    words: any;
    key: string;

    constructor(title: string,
                rawText: string,
                selectedWord: string,
                selectedWordId: string
) {
        this.title = title;
        this.rawText = rawText;
        this.selectedWord = selectedWord;
        this.selectedWordId = selectedWordId;
    }

    init(): void {
        this.words = this.rawText.split(' ');
    }
}
