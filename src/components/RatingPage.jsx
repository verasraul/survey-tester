import React from 'react';

function RatingPage() {
    
    let starRatings = () => {

        return (
            <div className='survey-box'>
                <button className='1-star'>&#9733;</button>
                <button className='2-star'>&#9733;</button>
                <button className='3-star'>&#9733;</button>
                <button className='4-star'>&#9733;</button>
                <button className='5-star'>&#9733;</button>
            </div>
        );

    };

    return (
        <div >
            {starRatings()}
        </div>
    );
}

export default RatingPage;