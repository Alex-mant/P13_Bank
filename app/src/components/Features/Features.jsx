import React from "react";
import { featureItemContent } from "../../data/FeatureItemContent";
import FeaturesItem from "../FeaturesItem/FeaturesItem";

import './styles.scss';

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featureItemContent.map((item, index) => <FeaturesItem key={index} {...item}/>)}
    </section>
  );
};

export default Features;
