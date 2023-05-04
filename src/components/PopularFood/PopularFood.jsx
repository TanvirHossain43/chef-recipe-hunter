import React, { useEffect, useState } from 'react';
import Food from './Food';


const PopularFood = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-tanvirhossain43.vercel.app/popularfood')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-bold text-rose-600 text-center'>Popular Indian Foods</h2>
            <div className=' grid md:grid-cols-3 justify-items-center  gap-y-5 gap-x-0 mt-10'>
                {
                    foods.map(food => <Food
                        key={food.id}
                        food={food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default PopularFood;