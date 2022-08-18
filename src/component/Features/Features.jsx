import React from "react";
import { setFeatureItem } from "../../utils/setFeatureItem";
import iconChat from "../../assets/img/icon-chat.png"
import iconMoney from "../../assets/img/icon-money.png"
import iconSecurity from "../../assets/img/icon-security.png"
import './styles.scss';

const featureItemContent = [
  {
    title: "You are our #1 priority",
    imageURL: iconChat,
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    title: "More savings means higher rates",
    imageURL: iconMoney,
    text: " The more you save with us, the higher your interest rate will be!",
  },
  {
    title: "Security you can trust",
    imageURL: iconSecurity,
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {setFeatureItem(featureItemContent)}
    </section>
  );
};

export default Features;
