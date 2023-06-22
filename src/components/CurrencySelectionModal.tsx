import {
  IonModal,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSearchbar,
} from "@ionic/react";
import { observer } from "mobx-react";
import { useMst } from "../models";

const CurrencySelectionModal = observer(() => {
  const {
    showCurrencyPicker,
    toggleCurrencyPicker,
    setCurrencySelection,
    transactionType,
  } = useMst();

  const onSelection = (selection: string) => {
    setCurrencySelection(selection);
    toggleCurrencyPicker(false);
  };

  return (
    <IonModal
      isOpen={showCurrencyPicker}
      initialBreakpoint={0.25}
      breakpoints={[0, 0.25, 0.5, 0.75]}
      onWillDismiss={() => toggleCurrencyPicker(false)}
    >
      <IonContent className="ion-padding">
        <IonSearchbar placeholder="Search"></IonSearchbar>
        <IonList>
          <IonItem
            button
            onClick={() => onSelection("bitcoin")}
            routerLink={`/transaction/${transactionType}/zepcoin`}
          >
            <IonLabel>
              <h2>ZepCoin</h2>
            </IonLabel>
          </IonItem>
          <IonItem
            button
            onClick={() => onSelection("bitcoin")}
            routerLink={`/transaction/${transactionType}/bitcoin`}
          >
            <IonLabel>
              <h2>Bitcoin</h2>
            </IonLabel>
          </IonItem>
          <IonItem
            onClick={() => onSelection("ethereum")}
            button
            routerLink={`/transaction/${transactionType}/ethereum`}
          >
            <IonLabel>
              <h2>Ethereum</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonModal>
  );
});

export { CurrencySelectionModal };
