import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem style={{fontSize: "12px"}} href="tel:+234 810 864 6033">+234 810 864 6033</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem style={{fontSize: "14px"}} href="mailto:iberivictor7@gmail.com">iberivictor7@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/mavic01/" target="_blank" rel="noreferrer"><AiFillGithub size="2.7rem"/></SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/victor-iberi-018904175/" target="_blank" rel="noreferrer"><AiFillLinkedin size="2.7rem"/></SocialIcons>
          <SocialIcons href="https://www.instagram.com/mavic_art/" target="_blank" rel="noreferrer"><AiFillInstagram size="2.7rem"/></SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
