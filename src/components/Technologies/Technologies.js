import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {FcGoogle} from 'react-icons/fc';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Techinologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Node
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <FcGoogle size='2rem' />
        <ListContainer>
          <ListTitle>Googling</ListTitle>
          <ListParagraph>
            Searching <br /> Brave Browser
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
