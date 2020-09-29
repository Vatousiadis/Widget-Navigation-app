import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/wikisearch" className="item">
                Wiki Search
            </Link>
            <Link href="/dropdown" className="item">
                Color Dropdown
            </Link>
            <Link href="/translate" className="item">
                Tranlator
            </Link>
        </div>
    );
};

export default Header;