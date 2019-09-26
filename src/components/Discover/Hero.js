import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import {Link} from 'react-static';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Hero = () => (
  <HeroSection>
      <TextContainer>
          <h2><span className="black">Take back your</span> freedom to organize</h2>
          <h4>
            Discover the unparalleled power to organize. Use Aragon to launch a startup, 
            form a nonprofit, or rally an online community.
          </h4>
          <div className="hero-button-container centered">
            <a className="principal-button" href="https://mainnet.aragon.org "
              target="_blank">
              Try it out
            </a>
          </div>
        </TextContainer>
  </HeroSection>
);

const HeroSection = styled(Section)`
  background-image: linear-gradient(290deg, #95bbce, #c5d0e6 46%, #e7e4f6);
  height: auto;
  ${medium('height: 550px;')};
  padding-top: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  animation: shine 4s linear infinite;
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 663px;
  margin: auto;
  text-align: center;
  h2 .black {
    color: #212B36;
  }
  h4 {
    color: #6D7693;
  }
`;
export default Hero;
