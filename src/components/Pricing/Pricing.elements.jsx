import { Link } from "react-router-dom";
import styled from "styled-components";

export const PricingSection=styled.div`
    padding:100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:var(--bg-1);
`;

export const PricingWrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0 auto;
`;

export const PricingTitle=styled.h2`
    color:#fff;
    margin-bottom:16px;
`;

export const PricingContainer=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const PricingCard=styled.div`
    background:#242424;
    width:280px;
    height:500px;
    text-decoration:none;

    &:nth-child(2) {
        margin:24px;
    }
`;

export const PricingCardInfo=styled.div`
    display:flex;
    flex-direction:column;
    padding: 24px;
    align-items:center;
    color:var(--white);
`;

export const PricingCardIcon=styled.div`
    margin:24px 0;
`;

export const PricingCardPlan=styled.h3`
    font-size:20px;
    margin-bottom:4px;
`;

export const PricingCardCost=styled.h4`
    font-size:32px;
    margin-top:6px;

`;

export const PricingCardSmall=styled.p`
font-size:8px;
margin-bottom:24px;
`;

export const PricingCardFeatures=styled.ul`
    list-style:none;
    margin:16px 0 32px;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#a9b3c1;
    
`;

export const PricingCardFeature=styled.li`
    margin-bottom:10px;
`;