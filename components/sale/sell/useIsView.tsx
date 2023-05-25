import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../libs/redux/store";

export const useIsView = ({ id }: { id: number }) => {
  const { payment_type } = useSelector((state: RootState) => state.sale);
  const [isView, setView] = useState(false);

  useEffect(() => {
    if (payment_type == id) {
      setView(true);
    } else {
      setView(false);
    }
  }, [payment_type, id]);

  return [isView, setView];
};
