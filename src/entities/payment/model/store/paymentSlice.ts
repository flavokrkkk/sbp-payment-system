import { rootReducer } from "@/shared";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IPaymentStore } from "./types";
import { IPaymentParam, IPaymentStatusResponse } from "../../types/types";
import { setPaymentInfo } from "../../libs/paymentInfoService";
import { objectIsValid } from "@/shared/libs/utils/objectValid";

const initialState: IPaymentStore = {
  paymentParams: null,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const paymentSlice = createSliceWithThunks({
  name: "payment-slice",
  initialState,
  selectors: {
    paymentParams: (state) => state.paymentParams,
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
    validateStatusPayment: create.asyncThunk<
      { data: IPaymentParam; status: IPaymentStatusResponse },
      IPaymentParam,
      { rejectValue: string }
    >(
      async (payload, { rejectWithValue, dispatch }) => {
        try {
          if (objectIsValid(payload)) {
            // const response = await getPaymentStatus(payload.order_id);
            // if (response.data.status) {
            dispatch(paymentActions.setPaymentParams(payload));
            // }
            // if (!response.data.status) {
            //   dispatch(paymentActions.clearPaymentInfo());
            // }

            return {
              data: payload,
              status: {
                status: true,
              },
            };
          } else {
            return {
              data: payload,
              status: {
                status: null,
              },
            };
          }
        } catch (e) {
          return rejectWithValue(String(e));
        }
      },
      {
        fulfilled: (state, { payload }) => {
          if (!payload.status.status) {
            state.paymentParams = null;
          }
        },
      }
    ),
  }),
}).injectInto(rootReducer);

export const paymentActions = paymentSlice.actions;
export const paymentSelectors = paymentSlice.selectors;
