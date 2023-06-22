import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { useMst } from "../models";

const Summary = () => {
  const { toggleToast } = useMst();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Summary</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Summary</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonText>Transaction Summary</IonText>
        <IonButton
          routerLink="/"
          routerDirection="back"
          onClick={() => toggleToast(true)}
        >
          Confirm Transaction
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export { Summary };
