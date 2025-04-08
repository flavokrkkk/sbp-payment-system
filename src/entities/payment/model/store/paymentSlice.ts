import { rootReducer } from "@/shared";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IPaymentStore } from "./types";
import { IPaymentParam } from "../../types/types";
import { setPaymentInfo } from "../../libs/paymentInfoService";
import { objectIsValid } from "@/shared/libs/utils/objectValid";
import { banksList, IBank } from "@/shared/libs/mocks/banksList";

const initialState: IPaymentStore = {
  paymentParams: null,
  banksList,
  banksListFilter: banksList,
  recentBank: null,
  isClose: false,
  isDanger: false,
  isSuccess: false,
  isLoadingPolling: false,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const paymentSlice = createSliceWithThunks({
  name: "payment-slice",
  initialState,
  selectors: {
    paymentParams: (state) => state.paymentParams,
    recentBank: (state) => state.recentBank,
    banksList: (state) => state.banksList,
    isDanger: (state) => state.isDanger,
    isClose: (state) => state.isClose,
    isLoadingPolling: (state) => state.isLoadingPolling,
    isSuccess: (state) => state.isSuccess,
  },
  reducers: (create) => ({
    setPaymentParams: create.reducer(
      (state, { payload }: PayloadAction<IPaymentParam>) => {
        state.paymentParams = payload;
        setPaymentInfo(payload);
      }
    ),
    clearPaymentInfo: create.reducer((state) => {
      state.paymentParams = null;
    }),
    updateStatus: create.reducer((state) => {
      state.isDanger = true;
    }),
    setIsLoadingPolling: create.reducer(
      (state, { payload }: PayloadAction<boolean>) => {
        state.isLoadingPolling = payload;
      }
    ),
    validateStatusPayment: create.reducer(
      (state, { payload }: PayloadAction<IPaymentParam>) => {
        if (objectIsValid(payload)) {
          state.paymentParams = payload;
          setPaymentInfo(payload);
        } else {
          state.isDanger = true;
        }
      }
    ),
    searchBank: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.banksList = state.banksListFilter.filter((bank) =>
        bank.title.toLowerCase().includes(payload.toLowerCase())
      );
    }),
    setDescriptionOnPaymentParam: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.paymentParams = { ...state.paymentParams!, description: payload };
      }
    ),
    setRecentBank: create.reducer(
      (state, { payload }: PayloadAction<IBank["id"]>) => {
        const searchBank = state.banksList.findIndex(
          (bank) => bank.id === payload
        );
        if (~searchBank) {
          state.recentBank = state.banksList[searchBank];
        }
      }
    ),
  }),
}).injectInto(rootReducer);

export const paymentActions = paymentSlice.actions;
export const paymentSelectors = paymentSlice.selectors;
