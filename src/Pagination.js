import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage}) {
    return (
        <>
            <button onClick={ gotoPrevPage }>Previos</button>
            <button onClick={ gotoNextPage }>Next</button>
        </>
    );
}