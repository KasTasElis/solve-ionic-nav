import { getSnapshot, onSnapshot, types } from "mobx-state-tree";

const RootStore = types
  .model({
    showToast: false,
    showCurrencyPicker: false,
    currencySelection: "",
    transactionType: "",
  })
  .actions((self) => ({
    toggleToast(isOpen: boolean) {
      self.showToast = isOpen;
    },
    toggleCurrencyPicker(isOpen: boolean) {
      self.showCurrencyPicker = isOpen;
    },
    setCurrencySelection(currency: string) {
      self.currencySelection = currency;
    },
    setTransactionType(transactionType: string) {
      self.transactionType = transactionType;
    },
  }));

const store = RootStore.create();

// initial log
const initialState = getSnapshot(store);
console.log("Initial State: ", initialState);

// on change log
onSnapshot(store, (snapshot) => console.log("Snapshot: ", snapshot));

const useMst = () => store;

export { useMst };
