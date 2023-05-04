import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import ChefSection from '../../components/ChefSection/ChefSection';
import PopularFood from '../../components/PopularFood/PopularFood';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ChefSection></ChefSection>
          <PopularFood></PopularFood>
        </div>
    );
};

export default Home;