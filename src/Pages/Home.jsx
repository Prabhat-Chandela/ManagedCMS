import React from 'react';
import { HeroSection, HeroBanner,HeroAbout } from '../Components/index';

function Home() {
  return (
    <main className='w-full mt-[90px]'>

      <HeroSection />
      <HeroBanner />
      <HeroAbout/>

    </main>
  )
}

export default Home;