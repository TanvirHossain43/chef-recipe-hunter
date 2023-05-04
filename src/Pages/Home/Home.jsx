import React from 'react';
import Banner from '../../components/Banner/Banner';
import ChefSection from '../../components/ChefSection/ChefSection';
import PopularFood from '../../components/PopularFood/PopularFood';
import KitchenTips from '../../components/KitchenTips/KitchenTips';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ChefSection></ChefSection>
          <PopularFood></PopularFood>
          <KitchenTips></KitchenTips>
        </div>
    );
};

export default Home;