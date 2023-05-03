import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);


    // useEffect(() => {
    //     fetch('http://localhost:5000/chefdata')
    //         .then(res => res.json())
    //         .then(data => setChefs(data))
    // }, [])
    return (
        <div className='mt-10' >
            <h3 className='text-5xl font-extrabold text-center mb-5 '>Chef Section</h3>
            <div className='grid md:grid-cols-3 justify-items-center items-end gap-y-5 gap-x-0'>
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    >

                    </Chef>)
                }
            </div>

        </div>
    );
};

export default ChefSection;