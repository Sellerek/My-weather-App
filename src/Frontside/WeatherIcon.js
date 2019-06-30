import React from 'react';

export default ({icon}) => {
        return (
        <img
            src={`../public/icons/${icon}.svg`}
            alt="weather icon"
            width="125px"
        />
        );
    }