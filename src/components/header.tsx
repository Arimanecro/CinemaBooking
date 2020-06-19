import React, { ReactElement } from "react";
import styled from "styled-components";
import bg from "../../src/assets/img/turbocat.jpg";
import popcorn from "../../src/assets/img/popcorn.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 29vh;
  padding-left: 3px;
  margin-top: 56px;
  background: url(${bg}) no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;
const Title = styled.p`
  background: #4b3b3b9e;
  color: #f44336;
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  bottom: 24px;
  letter-spacing: 1px;
`;
const Genre = styled.p`
  font-size: 16px;
  color: #1bff91;
  position: absolute;
  bottom: 1px;
`;
const Rating = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 66px;
  height: 31px;
  font-size: 20px;
  margin-right: 6px;
  background: url(${popcorn}) no-repeat;
  background-size: contain;
  text-align: right;
  color: white;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

export default (): ReactElement => {
  return (
    <Wrapper>
      <Title>StarDog and TurboCat</Title>
      <Genre>Animated / Family</Genre>
      <Rating>94%</Rating>
    </Wrapper>
  );
};
