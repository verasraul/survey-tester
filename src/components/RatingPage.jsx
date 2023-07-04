import React, { useState } from 'react';
import {SurveyPage} from './SurveyPage';

function RatingPage() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    
    const starRatings = () => {

        return (
            <>
            <div className= 'survey-box'>
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button 
                            type='button' 
                            key={index} 
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => {
                                setRating(index);
                                console.log(index);
                                // if (index >= 3){
                                //     return(
                                //     <button>Submit</button>
                                // )}
                        }}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
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