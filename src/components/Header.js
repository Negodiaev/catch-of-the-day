import React from 'react';

const Header = props => (
    <header className="top">
        <h1>
            Catch
            <span class="ofThe">
                <span class="of"> of</span> <span class="the">the </span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

export default Header;
