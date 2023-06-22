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
  IonToast,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { FabButton } from "../components/FabButton";
import { observer } from "mobx-react";
import { useMst } from "../models";
import { CurrencySelectionModal } from "../components/CurrencySelectionModal";
import { useEffect } from "react";
import { TransactionInfoModal } from "../components/TransactionInfoModal";

const Tab1 = observer(() => {
  const [present] = useIonToast();
  const {
    showToast,
    toggleToast,
    toggleTransactionInfoModal,
    toggleCurrencyPicker,
    setTransactionType,
  } = useMst();

  useEffect(() => {
    if (showToast) {
      present({
        header: "Success",
        message: "Transaction Submitted.",
        duration: 1500,
        position: "top",
        color: "success",
        onDidDismiss: () => toggleToast(false),
        buttons: [
          {
            text: "TX Info",
            handler: () => toggleTransactionInfoModal(true),
            role: "cancel",
          },
        ],
      });
    }
  }, [showToast]);

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
        <CurrencySelectionModal />
        <TransactionInfoModal />

        <FabButton />

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h2 className="ion-margin">Quick Actions:</h2>
        <div style={{ display: "flex", gap: "20px", margin: "15px" }}>
          <IonButton
            onClick={() => {
              setTransactionType("buy");
              toggleCurrencyPicker(true);
            }}
          >
            Buy
          </IonButton>
          <IonButton
            onClick={() => {
              setTransactionType("exchange");
              toggleCurrencyPicker(true);
            }}
          >
            Exchange
          </IonButton>
        </div>

        <ExploreContainer name="Tab 1 page" />

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
});

export default Tab1;
