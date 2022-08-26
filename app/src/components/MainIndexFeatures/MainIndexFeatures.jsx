import React from "react";
import { featureItemContent } from "../../data/mainIndexFeatureItemContent";
import MainIndexFeaturesItem from "../MainIndexFeaturesItem/MainIndexFeaturesItem";

import './styles.scss';

const MainIndexFeatures = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featureItemContent.map((item, index) => <MainIndexFeaturesItem key={index} {...item}/>)}
    </section>
  );
};

export default MainIndexFeatures;
