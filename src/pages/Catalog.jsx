import React from 'react';

import Book from '../components/Book/Book';

function Catalog ({
    items,
    searchValue,
    isLoading
}) {
    const render = () => {
        return items.map((item, index) =>(
            <Book
            key={index}

            />
        ));
    }

    return (

        <div>
            <div>{render()}</div>
        </div>

    )
}

export default Catalog;