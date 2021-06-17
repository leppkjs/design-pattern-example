export class Banner {
    #text: string;

    constructor(text: string) {
        this.#text = text;
    }

    public showWithParen() {
        console.log(`(  ${this.#text} )`);
    }

    public showWithAster () {
        console.log(`*  ${this.#text} *`);
    }
}