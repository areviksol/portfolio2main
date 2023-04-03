import React from 'react';
import HeroSection from '../../HeroSection';
import { Data1} from './Data';

function Home() {
  return (
    <>
      <HeroSection {...Data1} />
    </>
  );
}

export default Home;
