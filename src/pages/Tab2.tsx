import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import { FabButton } from "../components/FabButton";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/profile">Profile</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FabButton />

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />

        <IonList>
          <IonItemSliding>
            <IonItem button routerLink="/asset/bitcoin">
              <IonLabel>ZepCoin</IonLabel>
            </IonItem>

            <IonItemOptions>
              <IonItemOption routerLink="/transaction/send/zepcoin">
                Snd
              </IonItemOption>
              <IonItemOption routerLink="/transaction/buy/zepcoin">
                Buy
              </IonItemOption>
              <IonItemOption routerLink="/transaction/receive/zepcoin">
                Rcv
              </IonItemOption>
              <IonItemOption routerLink="/transaction/exchange/zepcoin">
                Exc
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

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

export default Tab2;
