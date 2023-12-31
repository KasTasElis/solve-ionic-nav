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

        <IonText>EnterAmount</IonText>

        <IonButton
          routerLink={`/transaction/${transactionType}/${assetName}/summary`}
        >
          Confirm Amount
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export { Transaction };
