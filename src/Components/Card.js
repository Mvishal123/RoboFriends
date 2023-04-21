import React from 'react';

const Card = (props) => {
    return(
        <div className='dib bg-light-green br3 pa10 ma3 bw2 shadow-5 grow'>
            <img alt='robophoto' src= {`https://robohash.org/${props.name}?size=200x180`}/>
            <div className="tc pa3">
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
        );
}

export default Card;