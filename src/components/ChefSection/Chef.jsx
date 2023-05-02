import React from 'react';

const Chef = ({ chef }) => {
    const { name, picture, experience, likes, recipes } = chef

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Experience:{experience} years</p>
                <p>Number of recipes:{recipes}+</p>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Chef;