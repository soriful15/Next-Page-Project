import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon, XCircleIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto md:max-w-full sm:max-w-xl lg:max-w-screen-xl lg:px-8 md:px-24'>




            <div className='second flex items-center justify-between relative'>
                <div>
                    <Link to='/' className='inline-flex items-center'>

                        <BoltIcon className="h-6 w-6 text-blue-500" />
                        <span className='ml-2 text-2xl font-bold text-gray-800'>Next page</span>
                    </Link>
                </div>
                <div>
                    {/*   <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/about">About</Link> */}

                    <ul className='items-center space-x-8 hidden lg:flex'>

                        <li>
                            <NavLink to='/' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/books' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                About
                            </NavLink>
                        </li>

                    </ul>

                </div>
                <div className='lg:hidden'>


                    <button title='OpenMenu' onClick={() => setIsOpen(true)}>
                        <Bars3BottomRightIcon className="h-6 w-6 text-blue-500" />

                    </button>
                    {
                        isOpen && (
                            <div className='absolute top-0 left-0 w-full z-0'>



                                <div className='p-5 bg-white border
                                 rounded shadow-sm'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>

                                                <BoltIcon className="h-6 w-6 text-blue-500" />
                                                <span className='ml-2 text-2xl font-bold text-gray-800'>Next page</span>
                                            </Link>
                                        </div>

                                        <div>
                                            <button title='closeOpen' onClick={() => setIsOpen(false)}>
                                                <XCircleIcon className=" w-6 text-blue-500" />
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link to="/" className='default'>Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/books" className='font-medium hover:text-blue-400 text-gray-700 duration-200 tracking-wide transition-colors '>Books</Link>
                                            </li>
                                            <li>
                                                <Link to="/about" className='font-medium hover:text-blue-400 text-gray-700 duration-200 tracking-wide transition-colors '>About</Link>
                                            </li>
                                        </ul>

                                    </nav>
                                </div>


                            </div>
                        )
                    }

                </div>
            </div>



        </div>
    );
};

export default Header;