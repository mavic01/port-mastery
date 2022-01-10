import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/"><a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}><DiCssdeck size="3rem" /><Span>mavic</Span></a></Link>
    </Div1>
    <Div2>
      <li><Link href="#projects"><NavLink>Projects</NavLink></Link></li>
      <li><Link href="#tech"><NavLink>Technologies</NavLink></Link></li>
      <li><Link href="#about"><NavLink>About</NavLink></Link></li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/mavic01/" target="_blank" rel="noreferrer"><AiFillGithub size="2.5rem"/></SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/victor-iberi-018904175/" target="_blank" rel="noreferrer"><AiFillLinkedin size="2.5rem"/></SocialIcons>
      <SocialIcons href="https://www.instagram.com/mavic_art/" target="_blank" rel="noreferrer"><AiFillInstagram size="2.5rem"/></SocialIcons>
    </Div3>
  </Container>
);

export default Header;
