import React, { ReactElement } from "react";
import {
  IonPage,
  IonContent,
  IonButtons,
  IonBackButton,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { Elements } from "@stripe/react-stripe-js";
import { arrowBack } from "ionicons/icons";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import Ticket from "../classes/ticket";
import { CheckOutForm } from "../components/checkoutForm";

type propsCard = {
  card: string;
};

const stripePromise = loadStripe(
  "pk_test_***********************************",
  {
    locale: "en",
  }
);

const Wrapper = React.memo(styled.div`
  width: 332px;
  height: 214px;
  position: relative;
  margin: 74px auto 0px;
`);
const CardRight = React.memo(styled.div`
  width: 233px;
  height: 152px;
  background: url(${(props: propsCard) => props.card}) no-repeat;
  background-size: contain;
  position: absolute;
  left: 0;
  top: 0;
`);
const CardLeft = React.memo(styled(CardRight)`
  left: unset;
  top: unset;
  right: 0;
  bottom: 0;
`);
const Total = React.memo(styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 22px;
  position: relative;
  margin: 30px 0px;
  font-size: 24px;
`);
const Price = React.memo(styled(Total)`
  color: #afff05;
`);

export default (): ReactElement => {
  return (
    <IonPage>
      <IonContent>
        <IonToolbar slot="fixed">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" icon={arrowBack} />
          </IonButtons>
          <IonTitle color="white">Payment</IonTitle>
        </IonToolbar>
        <Wrapper>
          <CardRight card={card2} />
          <CardLeft card={card3} />
        </Wrapper>
        <Price>Total: {Ticket.count()}$</Price>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </IonContent>
    </IonPage>
  );
};
