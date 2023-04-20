import React, { useEffect, useState } from 'react';
import './Home.css'
import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className='bannar'>
                <h1 className='banner-title'>Burj Al Arab</h1>
                <h4 className='fw-bold fw-4'>A global icon of Arabian Luxury</h4>
            </div>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5'>
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;