import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div className="mt-40 text-center">
                <h1 className="text-5xl text-indigo-800">
                    404 - Page Not found
                </h1>
                <h2 className="text-xl mt-3">
                    The page you're looking for, can't be found.
                </h2>
                <h2 className="text-xl mt-3">
                    <Link to="/" className="underline">Back to Home</Link>
                </h2>
            </div>
        </>
    );
}

export default NotFound;