import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from '../../Pages/ChefDetails/ChefDetails';

const ViewRecipe = () => {
   
    const chefDetails = useLoaderData()
    // console.log(chefDetails)
    
    return (
        <div>
           
           {
          chefDetails.map(detail => <ChefDetails
          key={detail.id}
          detail={detail}

          ></ChefDetails>)
           }
        </div>
    );
};

export default ViewRecipe;