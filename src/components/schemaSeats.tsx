import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import Ticket from '../classes/ticket';
import {TicketContext} from '../context/ticketContext';
import {I_TicketContext} from '../interfaces/';
const getContent = document.getElementsByTagName('ion-content');
getContent[0]?.scrollIntoView({ behavior: "smooth"});

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 67%;
  margin: 0 auto;
  margin-bottom: 10px;
  height: 216px;
`;
const W_Booked = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  height: 90px;
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
  border: white thin solid;
`;
const Available = styled(Selected)`
  background: transparent;
`;

const chunk = (n:number, xs:never[], y=[]):any => { return xs.length===0 ? y : chunk(n, xs.slice(n), y.concat([xs.slice(0, n)] as never)) }

const checker = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const target = (e.target as HTMLElement);
  const dataMark:string | undefined = target.dataset.mark;
      if(dataMark !== '2'){
        if(dataMark == '1') {
          target.style.background='transparent';
          target.dataset.mark='0';
        }else {
          target.style.background='white';
          target.dataset.mark='1';
        }
        Ticket.add({ 'tickets': {[target.dataset.num as string]: target.parentElement?.dataset.sector} });
      } 
}  
const factorySeats = (reRender:I_TicketContext) => {
  // eslint-disable-next-line react/jsx-key
  const types: JSX.Element[] = [<Booked data-mark="2" />, <Available data-mark="0" />];
  
  const seats: number[] = Array.from(Array(54).keys());

  const createRandom: (JSX.Element | undefined)[] = seats.map((v, k) => {
    const r = Math.floor(Math.random() * 2);
    return React.cloneElement(
      types[r],
      {
      'key': k,
      'data-num': k, 
      'onClick': (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        checker(e); 
        reRender.rerenderCountOfTickets(Date.now());
        getContent[0]?.scrollToBottom(window.innerHeight);
      }
      }
    )
  });

  return chunk(9, createRandom as never[]);
};
export default React.memo((): ReactElement => {
  const reRender = useContext(TicketContext);
  return (
    <>
      <Wrapper>
        {
        factorySeats(reRender).map((v:any, k:any) => {
          return (<W_Booked data-sector={k} key={k}>{v}</W_Booked>);  
        })
        }
      </Wrapper>
    </>
  );
});
