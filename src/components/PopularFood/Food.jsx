import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Food = ({ food }) => {
    const { foodurl, foodname, description, views } = food;
    // console.log(food)
    return (
        <div>
            <div className="card w-96  bg-base-100 shadow-xl">
                <figure className='h-56'>
                    <img className='w-full' src={foodurl} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {foodname}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className=""> <FontAwesomeIcon icon={faEye} className='mr-3' />{views}</div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Food;