import { rootReducer } from "@/shared";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IPaymentStore } from "./types";
import { setPaymentOrderId } from "../../libs/paymentInfoService";
import { banksList } from "@/shared/libs/mocks/banksList";
import { IPaymentStatusResponse } from "../../types";

const initialState: IPaymentStore = {
  paymentParams: null,
  banksList,
  banksListFilter: banksList,
  recentBank: null,
  isLoadingPolling: false,
  orderId: null,
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
    isLoadingPolling: (state) => state.isLoadingPolling,
    orderId: (state) => state.orderId,
  },
  reducers: (create) => ({
    setPaymentOrderId: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.orderId = payload;
        setPaymentOrderId(payload);
      }
    ),
    clearPaymentInfo: create.reducer((state) => {
      state.paymentParams = null;
    }),
    setIsLoadingPolling: create.reducer(
      (state, { payload }: PayloadAction<boolean>) => {
        state.isLoadingPolling = payload;
      }
    ),
    searchBank: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.banksList = state.banksListFilter.filter((bank) =>
        bank.title.toLowerCase().includes(payload.toLowerCase())
      );
    }),
    setPaymentDetails: create.reducer(
      (
        state,
        { payload }: PayloadAction<IPaymentStatusResponse["payment_details"]>
      ) => {
        state.paymentParams = payload;
      }
    ),
  }),
}).injectInto(rootReducer);

export const paymentActions = paymentSlice.actions;
export const paymentSelectors = paymentSlice.selectors;
