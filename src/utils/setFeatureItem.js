import FeatureItem from "../component/FeatureItem/FeatureItem";

let key = 0;

export const setFeatureItem = (featureItemContent) => {
  return featureItemContent.map((item) => {
    return <FeatureItem title={item.title} imageURL={item.imageURL} text={item.text} key={key++}/>;
  });
};