import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const [ sidebarClass, setSidebarClass ] = useState('right-sidebar--close');

    const toggleSideBarHandler = (action) => {
        let currentClass = 'right-sidebar--close';
        if (action === 'open') {
            currentClass = 'right-sidebar--open';
        }

        setSidebarClass(currentClass);
    };


    return (
        <nav className="w-full fixed top-0 left-0 z-20">
            <div className="flex justify-between md:bg-indigo-800 md:shadow-lg">
                <div className="w-full bg-indigo-800 md:bg-transparent py-5 text-white shadow-lg md:shadow-none">
                    <div className="w-11/12 mx-auto">
                        <div className="flex flex-row items-center justify-between">
                            <Link
                                to="/"
                                className="font-bold text-2xl">
                                    Northwind DB
                            </Link>
                            <button
                                className="px-2 outline focus:outline-none md:hidden"
                                onClick={() => toggleSideBarHandler('open')}>
                                    <svg className="w-7 h-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                                    </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <aside className={ sidebarClass + ' transform fixed md:relative top-0 right-0 w-full h-full md:h-auto bg-white md:bg-transparent ease-in-out transition-all duration-300 z-30' }>
                    <div className="w-11/12 mx-auto md:h-auto flex flex-col">
                        <div className="text-right md:hidden">
                            <button type="button" className="outline-none focus:outline-none px-2 py-6" onClick={() => toggleSideBarHandler('close')}>
                                <svg className="w-7 h-auto text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full mt-5 md:mt-0 text-center md:text-right">
                            <Link
                                to="/"
                                className="block md:hidden font-bold text-3xl text-indigo-800 py-4"
                                onClick={() => toggleSideBarHandler('close')}>
                                    Northwind DB
                            </Link>
                            <div className="md:h-full mt-10 sm:mt-5 md:mt-2 md:flex md:flex-row md:items-center md:justify-end">
                                <Link
                                    to="/"
                                    className="block px-3 py-4 text-lg hover:underline md:hover:no-underline md:text-white md:hover:text-indigo-200 transition duration-300"
                                    onClick={() => toggleSideBarHandler('close')}>
                                        Home
                                </Link>
                                <Link
                                    to="/customers"
                                    className="block px-3 py-4 text-lg hover:underline md:hover:no-underline md:text-white md:hover:text-indigo-200 transition duration-300"
                                    onClick={() => toggleSideBarHandler('close')}>
                                        Customers
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </nav>
    );
}

export default Navigation;