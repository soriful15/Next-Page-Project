import React from 'react';
import { Link } from 'react-router-dom';




const Book = ({ book }) => {
    // console.log(book)
    return (




        <>
            <Link to={`../book/${book.isbn13}`}>

                <div className='relative  rounded shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-200'>
                    <img src={book.image} alt="" className='object-cover w-full md:h-64 h-56 xl:h-80' />
                    <div className='text-gray-300 bg-black bg-opacity-75 opacity-0 px-6 py-4 hover:opacity-100 flex flex-col absolute inset-0 duration-200 transition-opacity '>
                        <p>{book.title}</p>
                        <br />
                        <p>{book.subtitle.substring(0, 45)}...</p>
                        <br />
                        <p className='mt-auto'>{book.price}</p>

                    </div>
                </div>

            </Link>



        </>
    );
};

export default Book;