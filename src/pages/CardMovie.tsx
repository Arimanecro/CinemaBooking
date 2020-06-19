import React, { ReactElement } from "react";
import {
  IonPage,
  IonContent,
  IonTitle,
  IonBackButton,
  IonToolbar,
  IonButtons,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import styled from "styled-components";
import Popcorn from "../components/rating";
import SimpleTabs from "../components/tabs";
import Schedule from "../components/schedule";
import Seats from "../components/seats";
import SchemaSeats from "../components/schemaSeats";
import Sum from "../components/sum";
import { ListOfMovies } from "../ListOfMovies";
import { I_CardMovie } from "../interfaces";
import "../theme/variables.css";

type coverProps = { bg: string };

const Info = styled.div`
  width: 98vw;
  min-height: 360px;
  background: rgba(255, 255, 255, 0.86);
  border: black thin solid;
  margin: 100px auto 0px;
  position: relative;
`;
const Cover = styled.div`
  width: 189px;
  height: 252px;
  position: absolute;
  margin-top: -30px;
  margin-left: 5px;
  background: url(${(props: coverProps) => props.bg}) no-repeat;
  background-size: cover;
`;
const LeftSection = styled.div`
  width: 197px;
  height: 223px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
`;
const Title = styled.h1`
  font-size: 24px;
  color: #eb1287;
  text-transform: uppercase;
  text-align: center;
`;
const Year = styled.h1`
  font-size: 18px;
  color: #eb1287;
  text-align: center;
  margin-top: 8px;
`;

const CardMovie: React.FC<I_CardMovie> = (props: I_CardMovie): ReactElement => {
  const { title, category } = props.match.params;
  const { stars, description, cover } = ListOfMovies[
    category as "trending" | "new"
  ][title];
  return (
    <IonPage>
      <IonContent scrollEvents={true}>
        <IonToolbar slot="fixed">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={arrowBack} />
          </IonButtons>
          <IonTitle color="white">{title}</IonTitle>
        </IonToolbar>
        <Info>
          <Cover bg={cover} />
          <LeftSection>
            <Title>{title}</Title>
            <Year>(2020)</Year>
            <Popcorn />
          </LeftSection>
          <SimpleTabs stars={stars} description={description} />
        </Info>
        <Schedule />
        <Seats />
        <SchemaSeats />
        <Sum />
      </IonContent>
    </IonPage>
  );
};

export default CardMovie;
