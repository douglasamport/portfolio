import React from 'react';
import Link from 'next/link';

function NavBar() {
    return <nav className="navBar">
        <div className="container">
            <Link href="/">
                <a className="title">Home</a>
            </Link>
            <ul>
                <Link href="/posts">
                <a>All Posts</a>
                </Link>
                <Link href="/projects">
                    <a>Projects</a> 
                </Link>
            </ul>
        </div>
        </nav>;
}

export default NavBar;