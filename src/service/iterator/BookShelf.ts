import {Aggregate} from "./Aggregate";
import {Book} from "./Book";
import {Iterator} from "./Iterator";
import {BookShelfIterator} from "./BookShelfIterator";

export class BookShelf implements Aggregate {
    #books: Array<Book>;
    #last: number = 0;

    constructor(maxsize: number) {
        this.#books = new Array<Book>(maxsize);
    }

    public getBookAt(index: number): Book {
        return this.#books[index];
    }

    public appendBook(book: Book) {
        this.#books[this.#last] = book;
        this.#last++;
    }

    public getLength(): number {
        return this.#last;
    }

    public iterator(): Iterator {
        return new BookShelfIterator(this);
    }

}