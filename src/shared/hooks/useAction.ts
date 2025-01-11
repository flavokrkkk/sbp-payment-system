import { paymentActions } from "@/entities/payment";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ ...paymentActions }, dispatch);
};
