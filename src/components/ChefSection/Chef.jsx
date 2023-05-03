import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { name, picture, experience, likes, recipes } = chef

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="image" /></figure>
            <div className="card-body">

                <h2 className="card-title font-extrabold text-xl">{name}</h2>
                <p><span className='font-bold mr-2'>Experience:</span>{experience} years</p>
                <p><span className='font-bold mr-2'>Number of recipes:</span>{recipes}+</p>
                <p><FontAwesomeIcon className='mr-3 text-teal-500' icon={faThumbsUp} />{likes}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to="/recipes">View Recipe</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Chef;