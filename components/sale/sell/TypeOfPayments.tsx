import { Text, View, TouchableNativeFeedback } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../libs/redux/store";
import { useIsView } from "./useIsView";
import { ChangePaymentType } from "../../../libs/redux/feature/SaleSlice.feature";

export const TypeOfPayment = ({
  title,
  style,
  text_style,
  children,
  id,
}: {
  title: string;
  style: {};
  text_style: {};
  children: React.ReactNode;
  id: number;
}) => {
  const [isView, setView] = useIsView({ id });
  const dispatch = useDispatch();

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple("rgb(186 230 253)", false)}
      onPress={() => dispatch(ChangePaymentType({ payment: id }))}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isView ? "rgb(241 245 249)" : "",
          width: 109,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            ...style,
            borderRadius: 5,
            minWidth: 40,
            padding: 6,
            gap: 2,
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          {children}
        </View>
        <Text
          style={{
            ...text_style,
            fontSize: 13,
            textDecorationStyle: "solid",
            alignItems: "center",
            fontWeight: "300",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
