import { IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/react";
import { add } from "ionicons/icons";

function FabButton() {
  return (
    <IonFab slot="fixed" horizontal="center" vertical="bottom">
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton routerLink="/transaction/buy/bitcoin">Buy</IonFabButton>
        <IonFabButton routerLink="/transaction/send/bitcoin">Snd</IonFabButton>
        <IonFabButton routerLink="/transaction/receive/bitcoin">
          Rec
        </IonFabButton>
        <IonFabButton routerLink="/transaction/exchange/bitcoin">
          Exc
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
}

export { FabButton };
