import React, { useState } from 'react';

function RatingPage() {
    const [rating, setRating] = useState(0);
    
    const starRatings = () => {

            // Create button styles
            // const buttonStyle = {
            //     backgroundColor: 'transparent',
            //     border: 'none',
            //     outline: 'none',
            //     cursor: 'pointer',
            // }
            // const on = {
            //     color: '#000'
            // }
            // const off = {
            //     color: '#ccc'
            // }


        return (
            <>
            <div className= 'survey-box'>
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button 
                            type='button' 
                            key={index} 
                            className={index <= rating ? "on" : "off"}
                            onClick={() => setRating(index)}
                            >
                                <span className='star'>&#9733;</span>
                            </button>
                        );
                    })}
            </div>
            </>
           
        );

    };

    return (
        <div >
            {starRatings()}
        </div>
    );
}

export { RatingPage };