import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData } from 'react-router-dom';
import Recipe from '../../components/Recipes/Recipes';
import Recipes from '../../components/Recipes/Recipes';

const ChefDetails = ({ detail }) => {
    const { name, id, picture, experience, bio, likes, recipes } = detail;
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 " style={{ backgroundImage: `url("https://hips.hearstapps.com/hmg-prod/images/chicken-nugget-parm-casserole-1672785083.jpg?crop=1.00xw:0.750xh;0,0.250xh&resize=1200:*")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="grid grid-cols-2 p-3 gap-x-4 w-3/4">
                    <div className='h-full'>
                        <img src={picture} className="h-full  rounded-lg shadow-2xl" />
                    </div>
                    <div className="card w-96  shadow-xl image-full">
                        <div className='card-body'>
                            <h2 className=" font-extrabold text-xl">{name}</h2>
                            <p>{bio}</p>
                            <p><span className='font-bold mr-2'>Experience:</span>{experience} years</p>
                            <p><span className='font-bold mr-2'>Number of recipes:</span>{recipes}+</p>
                            <p><FontAwesomeIcon className='mr-3 text-teal-500' icon={faThumbsUp} />{likes}</p>
                            <button className="btn btn-active">See Recipies</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center font-bold'>New Section</h2>
                <div>
                    <Recipes></Recipes>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;