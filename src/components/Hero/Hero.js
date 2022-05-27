import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi I'm Harpreet Singh Pannu, highly motivated, self-starting developer seeking
        to launch a career building web applications and services. Familiar with
        development and deployment process for many web-based technologies.
      </SectionText>
      <Button
        onClick={() => (window.location = 'mailto:thepannu786@gmail.com')}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
