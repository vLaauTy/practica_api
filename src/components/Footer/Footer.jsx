import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "../../GlobalStyles";
import {
  FooterContainer,
  FooterDescription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinksTittle,
  SocialIcon,
  SocialIconLink,
  SocialMedia,
  SocialMediaWrapp,
  WebsiteRights,
  SocialIcons,
  SocialLogo,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDescription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribte at any time</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your email" />
          <Button fontBig>Subcribete</Button>
        </Form>
      </FooterDescription>
      <FooterLinksContainer>

        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTittle>About Us</FooterLinksTittle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Carres</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">How it works</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTittle>Contact Us</FooterLinksTittle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Carres</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">How it works</FooterLink>
          </FooterLinksItems>
          </FooterLinksWrapper>
           
          <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTittle>Videos</FooterLinksTittle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Carres</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">How it works</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTittle>Social media</FooterLinksTittle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Carres</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">How it works</FooterLink>
          </FooterLinksItems>
          </FooterLinksWrapper>
        

      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrapp>
          <SocialLogo to="">
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA @ 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapp>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
