import { rootReducer } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPaymentStore } from "./types";
import { IPaymentParam } from "../../types/types";
import { getPaymentInfo, setPaymentInfo } from "../../libs/paymentInfoService";

const initialState: IPaymentStore = {
  paymentParams: null,
};

export const paymentSlice = createSlice({
  name: "payment-slice",
  initialState,
  selectors: {
    paymentParams: (state) => state.paymentParams,
  },
  reducers: (create) => ({
    setPaymentParams: create.reducer(
      (state, { payload }: PayloadAction<IPaymentParam>) => {
        const paymentInfo = getPaymentInfo();
        if (paymentInfo) {
          state.paymentParams = paymentInfo;
          return;
        }
        if (!paymentInfo) {
          state.paymentParams = payload;
          setPaymentInfo(payload);
          return;
        }
      }
    ),
  }),
}).injectInto(rootReducer);

export const paymentActions = paymentSlice.actions;
export const paymentSelectors = paymentSlice.selectors;
