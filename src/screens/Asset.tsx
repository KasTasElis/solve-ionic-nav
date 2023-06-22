import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router-dom";

const Asset = () => {
  const { assetName } = useParams<any>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{assetName || "Undefined"}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{assetName || "Undefined"}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonText>{assetName || "Undefined"}</IonText>

        <IonList>
          <IonItem button routerLink={`/asset/${assetName}/buy`}>
            Buy
          </IonItem>
          <IonItem button routerLink={`/asset/${assetName}/exchange`}>
            Exchange
          </IonItem>
          <IonItem button routerLink={`/asset/${assetName}/send`}>
            Send
          </IonItem>
          <IonItem button routerLink={`/asset/${assetName}/receive`}>
            Receive
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export { Asset };
