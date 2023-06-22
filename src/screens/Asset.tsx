import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router-dom";

const Asset = () => {
  const { assetName } = useParams<any>();

  console.log(assetName);

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
      </IonContent>
    </IonPage>
  );
};

export { Asset };
