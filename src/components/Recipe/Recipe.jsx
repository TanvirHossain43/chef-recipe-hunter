import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {

    const recipes = useLoaderData()
    console.log(recipes)

    return (
        <div>
            {
                recipes.map(recipe =><h2>{}</h2>)
            }
           
        </div>
    );
};

export default Recipe;