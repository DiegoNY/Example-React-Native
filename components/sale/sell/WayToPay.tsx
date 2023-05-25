import { Text, View } from "react-native";
import React from "react";
import { Counted, Credit, Payments, Yape } from "./TypesOfPayments";
import { useSelector } from "react-redux";
import { RootState } from "../../../libs/redux/store";

export const WayToPay = () => {
  const { payment_type } = useSelector((state: RootState) => state.sale);

  const payments = Payments.map((payment) => {
    if (payment_type != payment.id) {
      return payment.component;
    }
  });

  const payment_select = Payments.find((payment) => payment.id == payment_type);

  return (
    <>
      <Text
        style={{ paddingHorizontal: 10, paddingTop: 10, fontWeight: "500" }}
      >
        Forma de pago
      </Text>
      <View>
        <View
          style={{
            marginHorizontal: 8,
            padding: 10,
            borderRadius: 5,
            gap: 8,
            flexDirection: "row",
          }}
        >
          {payment_select?.component}
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          gap: 7,
          backgroundColor: "",
        }}
      >
        {payments}
      </View>
    </>
  );
};
