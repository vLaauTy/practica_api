import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../GlobalStyles";
import {
  PricingSection,
  PricingTitle,
  PricingWrapper,
  PricingCard,
  PricingContainer,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardSmall,
  PricingCardFeatures,
  PricingCardFeature,

} from "./Pricing.elements";
const Pricing = () => {
  return (
    <section id='pricing'>
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingTitle>Our services</PricingTitle>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                    <FaGraduationCap/>
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>9.99</PricingCardCost>
                <PricingCardSmall>Nose nose nose</PricingCardSmall>
                <PricingCardFeatures>
                    <PricingCardFeature>100 new user</PricingCardFeature>
                    <PricingCardFeature>10.00 dowloads</PricingCardFeature>
                    <PricingCardFeature>?</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard></PricingCard>
            <PricingCard></PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
    </section>
  );
};

export default Pricing;
