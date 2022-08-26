import React from 'react';
import MainIndexFeatures from '../MainIndexFeatures/MainIndexFeatures';
import MainIndexHero from '../MainIndexHero/MainIndexHero';
import './styles.scss'

const MainIndex = () => {
  return (
    <main>
      <MainIndexHero/>
      <MainIndexFeatures/>
    </main>
  );
}

export default MainIndex;
