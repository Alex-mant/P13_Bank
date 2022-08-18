import React from "react";
import { setFeatureItem } from "../../utils/setFeatureItem";

import './styles.scss';

const MainIndexFeatures = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {setFeatureItem()}
    </section>
  );
};

export default MainIndexFeatures;
