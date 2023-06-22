import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton routerLink="/profile">Profile</IonButton>
          </IonButtons>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h2>Quick Actions:</h2>
        <div style={{ display: "flex", gap: "20px", margin: "15px" }}>
          <IonButton routerLink="/transaction/buy/bitcoin">Buy</IonButton>
          <IonButton routerLink="/transaction/send/bitcoin">Send</IonButton>
          <IonButton routerLink="/transaction/exchange/bitcoin">
            Exchange
          </IonButton>
          <IonButton routerLink="/transaction/receive/bitcoin">
            Receive
          </IonButton>
        </div>

        <ExploreContainer name="Tab 1 page" />

        <IonList>
          <IonItem button routerLink="/asset/bitcoin">
            Bitcoin
          </IonItem>
          <IonItem button routerLink="/asset/ethereum">
            Ethereum
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
