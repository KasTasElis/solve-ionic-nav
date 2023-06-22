import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Asset, Profile, Security, Summary, Transaction } from "./screens";
import { observer } from "mobx-react";

setupIonicReact();

const Tabs = () => (
  <IonPage>
    <IonTabs>
      <IonRouterOutlet>
        {/* Why is this needed if we have a fallback route? */}
        <Redirect exact path="/tabs" to="/tabs/tab1" />

        <Route exact path="/tabs/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tabs/tab2">
          <Tab2 />
        </Route>
        <Route path="/tabs/tab3">
          <Tab3 />
        </Route>

        {/* Fallback Route */}
        <Route exact path="/tabs">
          <Redirect to="/tabs/tab1" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
);

const App = observer(() => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/tabs" render={() => <Tabs />} />

          {/* Fallback route */}
          <Route exact path="/">
            <Redirect to="/tabs" />
          </Route>

          {/* Porfile */}
          <Route exact path="/profile" render={() => <Profile />} />
          <Route path="/profile/security" render={() => <Security />} />

          {/* Asset */}
          <Route exact path="/asset/:assetName" render={() => <Asset />} />
          <Route
            path="/asset/:assetName/:transactionType"
            render={() => <Transaction />}
          />

          {/* Transaction */}
          <Route
            exact
            path="/transaction/:transactionType/:assetName"
            render={() => <Transaction />}
          />
          <Route
            exact
            path="/transaction/:transactionType/:assetName/add-bank"
            render={() => <Transaction />}
          />
          <Route
            exact
            path="/transaction/:transactionType/:assetName/summary"
            render={() => <Summary />}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
});

export default App;
