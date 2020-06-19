import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { Plugins } from "@capacitor/core";
import { IonApp, IonRouterOutlet, IonSpinner } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import CardMovie from "./pages/CardMovie";
import ProximaNova from "./assets/webfonts/ProximaNova-Light.woff";
const Credit = React.lazy(() => import("./components/creditcard"));

ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);

const { SplashScreen } = Plugins;

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'ProximaNova';
      src: url(${ProximaNova}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    body { background: rgba(36, 2, 132, 0.65); }
    body, p { margin: 0px; padding:0px;font-family: "ProximaNova"; }
    a { display: block;text-decoration: none; color: black;}
    .StripeElement {
      width:90%;
      background-color: #f82bbd4f;
      margin: 30px auto 30px;
    }
    .IonLoading {
      position: absolute;
      z-index: 10;
    }
`;

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
    localStorage.removeItem("ticket");
  }, []);

  return (
    <IonApp>
      <GlobalStyles />
      <IonReactRouter>
        <React.Suspense
          fallback={<IonSpinner style={{ margin: "calc(50vh) auto 0px" }} />}
        >
          <IonRouterOutlet>
            <Route path="/" component={Home} exact />
            <Route path="/movie/:category/:title" component={CardMovie} />
            <Route path="/payment" component={Credit} exact />
          </IonRouterOutlet>
        </React.Suspense>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
