import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const DividedSection = ({image, imageLeft, sectionClass, children}) => (
  <StyledSection className={sectionClass}>
    <Box>
      {imageLeft && (
        <ImageContainer className="image-left">
          <Image className="divided-section-image" src={image} />
        </ImageContainer>
      )}
      <Container className="divided-section-container">{children}</Container>
      {!imageLeft && (
        <ImageContainer>
          <Image className="divided-section-image" src={image} />
        </ImageContainer>
      )}
    </Box>
  </StyledSection>
);


const StyledSection = styled(Section)`
  background-color: white;
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  flex-direction: column;
  ${medium('flex-direction: row; padding: 120px;')};
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${medium('flex-direction: row;')};
`;
const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${medium('text-align: left; margin: inherit; width: 60%;')};
  p {
    font-size: 21px;
    line-height: 35px;
    text-align: left;
    letter-spacing: 0.24px;
    color: #6d7693;
    max-width: 298px;
    margin: 20px 0;
  }
  h3 {
    font-size: 38px;
    line-height: 52px;
    text-align: left;
    letter-spacing: -0.447059px;
    margin: 50px 0 5px;
    color: #212b36;
    font-family: 'FontMedium', sans-serif;
    max-width: 333px;
  }
`;
const Image = styled.img`
  max-width: 100%;
  margin: 30px 0;
  ${medium('max-width: calc(100% + 413px); margin: auto;')};
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;

  &.image-left {
    display: flex;
    justify-content: flex-end;
  }
`;

export default DividedSection;
