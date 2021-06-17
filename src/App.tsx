import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BookShelf} from "./service/iterator/BookShelf";
import {Book} from "./service/iterator/Book";
import {Iterator} from "./service/iterator/Iterator";
import {PrintBanner} from "./service/adapter/case1/PrintBanner";
import {PrintBanner as PrintBanner2} from "./service/adapter/case2/PrintBanner";
import {Print} from "./service/adapter/case1/Print";
import {Print as Print2} from "./service/adapter/case2/Print";

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
        const print: Print = new PrintBanner('Hello');
        console.log('Case1.');
        print.printWeak();
        print.printStrong();

        const print2: Print2 = new PrintBanner2('Hello');
        console.log('Case2.');
        print2.printWeak();
        print2.printStrong();
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Design pattern Example</h1>

                <h2>Iterator</h2>
                <p>
                    <button type="button" onClick={runIterator}>Run</button>
                </p>

                <h2>Adapter</h2>
                <p>
                    <button type="button" onClick={runAdapter}>Run</button>
                </p>
            </header>
        </div>
    );
}

export default App;
