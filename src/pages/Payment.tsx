import React, {ReactElement} from "react";
import { IonPage, IonContent, IonButtons, IonBackButton, IonToolbar, IonTitle } from "@ionic/react";
import { arrowBack} from "ionicons/icons";
import Card from '../components/creditcard';

const Payment = ():ReactElement => {
  return (
    <IonPage>
      <IonContent>
      <IonToolbar slot="fixed">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={arrowBack} />
          </IonButtons>
          <IonTitle color="white">Payment</IonTitle>
        </IonToolbar>
        <Card/>
      </IonContent>
    </IonPage>
  );
};

export default Payment;
