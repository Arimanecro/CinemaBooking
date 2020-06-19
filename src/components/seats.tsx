import React, { ReactElement } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  color: #fff73c;
  margin: 15px 0px 15px 4px;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 52px;
  margin-bottom: 10px;
`;
const W_Booked = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 56px;
  height: inherit;
  text-align: center;
  color: white;
  font-size: 14px;
`;
const Booked = styled.div`
  width: 18px;
  height: 20px;
  background: #ff5757;
`;
const Selected = styled(Booked)`
  background: white;
`;
const Available = styled(Booked)`
  background: transparent;
  border: white thin solid;
`;

export default (): ReactElement => {
  return (
    <>
      <Title>Select Seats</Title>
      <Wrapper>
        <W_Booked>
          <Booked />
          <span>Booked</span>
        </W_Booked>
        <W_Booked>
          <Selected />
          <span>Selected</span>
        </W_Booked>
        <W_Booked>
          <Available />
          <span>Available</span>
        </W_Booked>
      </Wrapper>
    </>
  );
};
