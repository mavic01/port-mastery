import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies associated with web development.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>Front-End</ListContainer>
        <ListParagraph>Experience with <br /> React.js</ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>Back-End</ListContainer>
        <ListParagraph>Experience with <br /> Node and Databases</ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
