import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    fetch('https://chef-recipe-hunter-server-tanvirhossain43.vercel.app/chef')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])
  // console.log(recipes)
  

  return (
    <div>

      {
        recipes.map(recipe => <Recipe
        key={recipe.id}
        recipe={recipe}
        >

        </Recipe>)
      }
    </div>
  );
};

export default Recipes;