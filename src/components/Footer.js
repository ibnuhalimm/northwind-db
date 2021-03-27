import React from 'react';

function Footer() {
    let date = new Date();
    let currentYear = date.getFullYear();
    let footerYear = currentYear > 2021 ? 2021 + ' - ' + currentYear : 2021;

    return (
        <footer className="text-center text-gray-500 my-20">
            {footerYear} - <a href="https://github.com/ibnuhalimm" target="_blank" rel="noreferrer" className="hover:underline">Ibnu Halim Mustofa</a>
        </footer>
    );
}

export default Footer;