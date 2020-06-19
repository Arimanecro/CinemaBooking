import React from "react";
import { IonPage, IonHeader, IonToolbar } from "@ionic/react";
import Header from "../components/header";
import { Movies } from "../components/movies";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>Cinema Booking</IonToolbar>
      </IonHeader>
      <Header />
      <Movies />
    </IonPage>
  );
};

export default Home;
