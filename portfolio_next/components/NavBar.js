import React from 'react';
import Link from 'next/link';

function NavBar() {
    return <nav className="navBar">
        <div className="containerFull">
            <Link href="/">
                <a className="title">logo</a>
            </Link>
            <ul>
                <Link href="/projects">
                <a>Work</a>
                </Link>
                <Link href="/posts">
                    <a>Writing</a> 
                </Link>
            </ul>
        </div>
        </nav>;
}

export default NavBar;