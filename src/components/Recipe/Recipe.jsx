import React, { useEffect } from 'react';

const Recipe = ({recipe}) => {
const{chef} =recipe;
console.log(chef)
useEffect(()=>{
    fetch('http://localhost:5000/chef/1234')
    .then(res =>res.json())
    .then(data =>console.log(data))
},[])
    return (
        <div>
            hello
            {chef}
        </div>
    );
};

export default Recipe;