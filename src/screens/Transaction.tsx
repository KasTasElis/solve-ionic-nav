import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router-dom";

const Transaction = () => {
  const { assetName, transactionType } = useParams<any>();

  const title = `${assetName || "Undefined"} - ${
    transactionType || "Undefined"
  }`;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonText>{title}</IonText>

        {/* This is the trickier part, we can either always redirect to dashboard or we can write a function to parse root */}
        <IonButton routerLink="/" routerDirection="back">
          Complete Transaction
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export { Transaction };
