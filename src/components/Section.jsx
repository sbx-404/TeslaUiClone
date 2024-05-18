import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Section({
  DownArrows,
  heading,
  textOne,
  heroText,
  btnOne,
  btnTwo,
  backgroundImg,
  ...props
}) {
  return (
    <Wrapper backgroundImg={backgroundImg}>
      <Fade direction={"down"}>
        <ItemText>
          <h1>{heading}</h1>
          <ItemTextOne>
            <p>{textOne}</p>
          </ItemTextOne>
          <HeroTexts>
            <p>{heroText}</p>
          </HeroTexts>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade direction={"up"}>
          <ButtonGroups>
            <ButtonOne>{btnOne}</ButtonOne>
            {btnTwo && <ButtonTwo>{btnTwo}</ButtonTwo>}
          </ButtonGroups>
        </Fade>
        {DownArrows && <DownArrow src="/public/images/down-arrow.svg" />}
      </Buttons>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.backgroundImg});
`;

const ItemText = styled.div`
  padding-top: 6rem;
  text-align: center;
`;

const ItemTextOne = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 21px;
  font-weight: 600;
  text-decoration: bold;
  word-spacing: 2px;
  border-bottom: 1px solid black;
  width: 32.222%;
`;

const HeroTexts = styled.div`
  word-spacing: 2px;
  font-size: 12px;
`;

const ButtonGroups = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  gap: 20px;
  margin-bottom: 4rem;
  font-weight: 400;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonOne = styled.div`
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 35px;
  width: 100px;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 35px;
    width: 250px;
  }
`;

const ButtonTwo = styled(ButtonOne)`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin:0 auto;
  }
`;
