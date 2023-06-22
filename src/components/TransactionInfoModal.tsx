import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { observer } from "mobx-react";
import { useMst } from "../models";

const TransactionInfoModal = observer(() => {
  const { showTransactionInfoModal, toggleTransactionInfoModal } = useMst();

  return (
    <IonModal
      isOpen={showTransactionInfoModal}
      onWillDismiss={() => toggleTransactionInfoModal(false)}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              color="danger"
              onClick={() => toggleTransactionInfoModal(false)}
            >
              Close
            </IonButton>
          </IonButtons>
          <IonTitle>Transaction Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Transaction Info</IonContent>
    </IonModal>
  );
});

export { TransactionInfoModal };
