import React from 'react';
import './Book.css'
import { FaBed, FaMenorah } from 'react-icons/fa';

const Book = ({ book }) => {
    const { id, location, logo, name, salary, description, price } = book;
    console.log(book)
    return (

        <div className="col">
            <div className="card">
                <img src={logo} className="bed-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p><FaBed /><span className='fw-semibold ms-2'>{location}</span></p>
                        <p><FaMenorah /><span className='fw-semibold ms-2'>{salary}</span></p>
                        <p className='fw-semibold'>$<span className='fw-semibold ms-2'>{price}</span></p>
                        <button className='btn btn-primary'>Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;