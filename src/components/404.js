import React from 'react';

function notFound() {
    return (
        <main style={{height: '20000px'}}>
            <div className='not-found'>
                <div className='container'>
                    <h1>Sorry, this page was not found!</h1>
                    <p>Error: 404</p>
                </div>
            </div>
        </main>
        
    )
}

export default notFound;