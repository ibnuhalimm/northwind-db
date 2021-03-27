import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="mt-40 text-center">
                <h1 className="text-5xl text-indigo-800">
                    Northwind DB
                </h1>
                <h2 className="text-xl mt-3">
                    Simple API Consume Demo
                </h2>
                <h2 className="text-xl">
                    Built with <a href="https://reactjs.org" className="underline">ReactJs</a> and <a href="https://github.com/mevdschee/php-crud-api" className="underline">php-crud-api</a> as a backend.
                </h2>
            </div>
            <div className="mt-10 flex flex-row items-center justify-center">
                <Link
                    to="/"
                    className="mx-2 p-5 rounded-lg border border-solid border-indigo-800 bg-indigo-800 text-white transition duration-300">
                        <svg className="w-10 h-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                </Link>
                <Link
                    to="/customers"
                    className="mx-2 p-5 rounded-lg border border-solid border-indigo-800 text-indigo-800 hover:bg-indigo-800 hover:text-white transition duration-300">
                        <svg className="w-10 h-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                </Link>
            </div>
        </>
    );
}

export default Home;