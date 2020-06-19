import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { TicketContext } from "../context/ticketContext";
import { Context } from "vm";
import styled from "styled-components";

const WrapperTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  margin-bottom: 14px;
`;
const Total = styled.div`
  font-size: 24px;
`;
const Price = styled(Total)`
  color: #afff05;
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 27px;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.35);
  padding: 0 5px;
  margin-bottom: 5px;
`;
const YellowBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 305px;
  height: 59px;
  background: #fcf54a;
  border-radius: 47px;
  font-weight: 600;
  font-size: 18px;
  margin: 20px auto 10px;
  color: black;
`;
const ClearBtn = styled(YellowBtn)`
  background: transparent;
  border: black thin solid;
`;

const checkCountOfTickets = (reRender: Function) => {
  if (localStorage.getItem("ticket")) {
    const data = JSON.parse(localStorage.getItem("ticket") as string);
    if (data.tickets && Object.keys(data.tickets).length > 0) {
      return (
        <>
          <WrapperTotal>
            <Total>Total:&nbsp;&nbsp;</Total>
            <Price>
              ${`${(Object.keys(data.tickets).length * 5).toFixed(2)}`}
            </Price>
          </WrapperTotal>
          {Object.keys(data.tickets).map((v, k) => {
            return (
              <List key={k}>
                <div>
                  <span style={{ color: "#DB0303" }}>{data.tickets[v]}</span>
                  <span>&nbsp;&nbsp;sector</span>
                </div>
                <div>
                  <span style={{ color: "#0527DB" }}>{v}</span>
                  <span>&nbsp;&nbsp;seat</span>
                </div>
                <div>
                  <span style={{ color: "#F4F901" }}>5</span>
                  <span>&nbsp;$</span>
                </div>
              </List>
            );
          })}
          <Link to={{ pathname: `/payment` }}>
            <YellowBtn>Book my tickets</YellowBtn>
          </Link>
          <ClearBtn
            onClick={() => {
              localStorage.removeItem("ticket");
              reRender(Date.now());
            }}
          >
            Clear
          </ClearBtn>
        </>
      );
    }
    return false;
  }
  return false;
};

export default (): ReactElement => {
  const [count, setCount] = useState<number>(0);
  (TicketContext as Context)._currentValue.rerenderCountOfTickets = setCount;
  return <>{checkCountOfTickets(setCount)}</>;
};
