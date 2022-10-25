import create, { StoreApi, UseBoundStore } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export interface storeState {
  modalStatus: boolean;
  changeModalStatus: () => void;
}

export const useStoreBase = create<storeState>()((set) => ({
  modalStatus: false,
  changeModalStatus: () =>
    set((state) => ({ modalStatus: !state.modalStatus })),
}));

export const useStore = createSelectors(useStoreBase);
