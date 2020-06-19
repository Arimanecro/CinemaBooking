import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import camera from "../assets/img/camera.png";
import wheel from "../assets/img/wheel.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: #705aaf;
  position: absolute;
  top: 0;
  z-index: 20;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: white;
  position: relative;
`;
const Camera = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 284px;
  margin: 0 auto;
  background: url(${camera}) no-repeat;
  background-position: center;
  position: relative;
`;
const Wheel = styled.div`
  width: 70px;
  height: 70px;
  background: url(${wheel}) no-repeat;
  position: absolute;
  left: 77px;
  top: 8px;
  animation: ${rotate} 0.75s linear infinite;
`;
const WheelTwo = styled(Wheel)`
  left: 162px;
`;

export default (): ReactElement => {
  return (
    <Main>
      <Wrapper>
        <Camera>
          <Wheel />
          <WheelTwo />
          <p style={{ position: "absolute", bottom: 0 }}>
            PAYMENT IS PROCESSED...
          </p>
        </Camera>
      </Wrapper>
    </Main>
  );
};
