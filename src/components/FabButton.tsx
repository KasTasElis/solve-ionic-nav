import { IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/react";
import { add } from "ionicons/icons";
import { observer } from "mobx-react";
import { useMst } from "../models";

const FabButton = observer(() => {
  const { setTransactionType, toggleCurrencyPicker } = useMst();

  const onClick = (transactionType: string) => {
    setTransactionType(transactionType);
    toggleCurrencyPicker(true);
  };

  return (
    <IonFab slot="fixed" horizontal="center" vertical="bottom">
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton onClick={() => onClick("buy")}>Buy</IonFabButton>
        <IonFabButton onClick={() => onClick("send")}>Snd</IonFabButton>
        <IonFabButton onClick={() => onClick("receive")}>Rec</IonFabButton>
        <IonFabButton onClick={() => onClick("exchange")}>Exc</IonFabButton>
      </IonFabList>
    </IonFab>
  );
});

export { FabButton };
