import { Text, View } from "react-native";
import React from "react";
import { TypeOfPayment } from "./TypeOfPayments";
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const Counted = ({ id }: { id: number }) => {
  return (
    <TypeOfPayment text_style={{}} title="Contado" style={{}} id={id}>
      <FontAwesome5 name="coins" size={22} color="black" />
    </TypeOfPayment>
  );
};

export const Yape = ({ id }: { id: number }) => {
  return (
    <TypeOfPayment text_style={{}} title="Yape" style={{}} id={id}>
      <SimpleLineIcons name="wallet" size={22} color="black" />
    </TypeOfPayment>
  );
};

export const Credit = ({ id }: { id: number }) => {
  return (
    <TypeOfPayment text_style={{}} title="Credito" style={{}} id={id}>
      <Feather name="credit-card" size={22} color="black" />
    </TypeOfPayment>
  );
};

export const Payments = [
  {
    id: 1,
    component: <Counted id={1} />,
  },
  {
    id: 2,
    component: <Yape id={2} />,
  },
  {
    id: 3,
    component: <Credit id={3} />,
  },
];
