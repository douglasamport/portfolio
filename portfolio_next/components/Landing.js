import React from 'react';

function Landing({homeHeader}) {
    return (
        <div className="fullDiv landing">
            <header className="">
                <h1>{homeHeader.header}</h1>
                <p>{homeHeader.description}</p>
            </header>
        </div>
    );
}

export default Landing;