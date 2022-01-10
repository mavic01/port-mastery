import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey I'm Victor<br/>Welcome to My Corner of the World
      </SectionTitle>
      <SectionText>
        I'm a Full-Stack web developer. My speciality is the MERN-Stack
      </SectionText>
      {/* <Button onClick={() => window.location = "#projects"}>Learn More</Button> */}
      <Button><a href="#about">Learn More</a></Button>
    </LeftSection>
  </Section>
);

export default Hero;