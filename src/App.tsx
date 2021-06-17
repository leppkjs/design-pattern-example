import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BookShelf} from "./service/iterator/BookShelf";
import {Book} from "./service/iterator/Book";
import {Iterator} from "./service/iterator/Iterator";

function App(): React.ReactNode {
    const runIterator = () => {
        const bookShelf: BookShelf = new BookShelf(4);

        bookShelf.appendBook(new Book('책 1'));
        bookShelf.appendBook(new Book('책 2'));
        bookShelf.appendBook(new Book('책 3'));
        bookShelf.appendBook(new Book('책 4'));

        const it: Iterator = bookShelf.iterator();

        while (it.hasNext()) {
            const book: Book = it.next() as Book;
            console.log(book.name);
        }
    }

    const runAdapter = () => {
        alert(1);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Design pattern Example</p>

                <h2>Iterator</h2>
                <p>
                    <button type="button" onClick={runIterator}>
                        Run
                    </button>
                </p>

                <h2>Adapter</h2>
                <p>
                    <button type="button" onClick={runAdapter}>
                        Run
                    </button>
                </p>

            </header>
        </div>
    );
}

export default App;
