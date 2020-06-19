import React, { ReactElement, useState } from "react";
import { IonSlides, IonSlide } from "@ionic/react";
import styled from "styled-components";
import Ticket from "../classes/ticket";

type btnProps = { check: boolean };

const slideOpts = {
  initialSlide: 0,
  width: 250,
  centeredSlidesBounds: true,
  slidesOffsetBefore: 0,
  spaceBetween: 1,
  slidesPerView: 1.6,
  speed: 400,
};
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 127px;
  height: 36px;
  background: ${(props: btnProps) => (props.check ? "white" : "#705aaf")};
  border-radius: 3px;
  text-align: center;
  color: ${(props: btnProps) => (props.check ? "#705aaf" : "white")};
  border: ${(props: btnProps) => (props.check ? "none" : "white thin solid")};
`;
const Data = styled.h1`
  font-size: 20px;
  color: #fff73c;
  margin: 15px 0px 15px 4px;
`;

const showDate = (day: number, setDay: Function, type: string) => {
  const d: string[] = ["Today", "Tomorrow"];
  const t: string[] = [
    "12:40 AM",
    "15:10 PM",
    "17:10 PM",
    "20:45 PM",
    "23:55 PM",
  ];

  const date: string[] = type == "days" ? d : t;
  const days = type == "days" ? Array.from(Array(6).keys()) : t;

  if (type === "days") {
    const dayyy = new Date();
    const month = dayyy.toDateString().substr(4, 3);
    dayyy.setDate(dayyy.getDate() + 2);

    days.forEach(() => {
      date.push(`${String(dayyy.getDate())}th ${month}`);
      dayyy.setDate(dayyy.getDate() + 1);
    });
  }

  return Object.keys(days).map((v, k) => {
    return (
      <IonSlide key={k}>
        <Btn
          check={k == day ? true : false}
          onClick={() => {
            Ticket.add({ [type]: date[k] });
            setDay(k);
          }}
        >
          {date[k]}
        </Btn>
      </IonSlide>
    );
  });
};

export default (): ReactElement => {
  const [day, setDay] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  return (
    <>
      <Data>Day</Data>
      <IonSlides options={slideOpts}>{showDate(day, setDay, "days")}</IonSlides>
      <Data>ShowTime</Data>
      <IonSlides options={slideOpts}>
        {showDate(time, setTime, "time")}
      </IonSlides>
    </>
  );
};
