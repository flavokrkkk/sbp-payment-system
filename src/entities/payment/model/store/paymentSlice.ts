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
import { banksList, IBank } from "@/shared/libs/mocks/banksList";

const initialState: IPaymentStore = {
  paymentParams: null,
  banksList,
  banksListFilter: banksList,
  recentBank: null,
  isClose: false,
  isDanger: false,
  isSuccess: false,
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
    validateStatusPayment: create.asyncThunk<
      { data: IPaymentParam; status: IPaymentStatusResponse },
      IPaymentParam,
      { rejectValue: string }
    >(
      async (payload, { rejectWithValue, dispatch }) => {
        if (objectIsValid(payload)) {
          try {
            //await getPaymentStatus(payload.order_id);
            const response = { data: { status: false } };

            return {
              data: payload,
              status: {
                //отображаю статус запроса
                status: response.data.status,
              },
            };
          } catch (e) {
            return rejectWithValue(String(e));
          }
        } else {
          dispatch(paymentActions.updateStatus());
          return rejectWithValue("No valid params");
        }
      },
      {
        fulfilled: (state, { payload }) => {
          if (payload.status.status === null) {
            state.paymentParams = null;
            state.isClose = true;
          }
          if (payload.status.status) {
            state.isSuccess = true;
            state.paymentParams = payload.data;
            setPaymentInfo(payload.data);
          }
          if (!payload.status.status) {
            state.paymentParams = payload.data;
            setPaymentInfo(payload.data);
          }
        },
        rejected: (state) => {
          state.isClose = true;
        },
      }
    ),
    searchBank: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.banksList = state.banksListFilter.filter((bank) =>
        bank.title.toLowerCase().includes(payload.toLowerCase())
      );
    }),
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
