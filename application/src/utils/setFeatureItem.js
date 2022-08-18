import { featureItemContent } from "../datas/mainIndexFeatureItemContent";
import MainIndexFeaturesItem from "../component/MainIndexFeaturesItem/MainIndexFeaturesItem";

export const setFeatureItem = () => {
  return featureItemContent.map((item, index) => {
    return <MainIndexFeaturesItem key={index} {...item}/>;
  });
};
