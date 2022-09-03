import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center style={{fontSize: '40px'}}>
        Hey I'm Victor, Welcome to My Corner of the World
      </SectionTitle>
      <SectionText>
        I'm a Frontend web developer.
      </SectionText>
      {/* <Button onClick={() => window.location = "#projects"}>Learn More</Button> */}
      <Button><a href="#about">Learn More</a></Button>
    </LeftSection>
  </Section>
);

export default Hero;