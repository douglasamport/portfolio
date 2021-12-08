import React from 'react';

function HomeHeader({homeHeader}) {
    return (
        <header>
            <h1>{homeHeader.header}</h1>
            <p>{homeHeader.description}</p>
        </header>
    );
}

export default HomeHeader;