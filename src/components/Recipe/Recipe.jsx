import React, { useEffect } from 'react';

const Recipe = ({recipe}) => {
const{chef} =recipe;
console.log(chef)

    return (
        <div>
            hello
            {chef}
        </div>
    );
};

export default Recipe;