import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../libs/redux/store";
import { ChangeSale } from "../../../libs/redux/feature/SaleSlice.feature";
import { DetailSell } from "./DetailSell";
import { WayToPay } from "./WayToPay";
import { ClientData } from "./ClientData";

export const Sell = () => {
  const { view_sell } = useSelector((state: RootState) => state.sale);
  const dispatch = useDispatch();
  return (
    <Modal
      visible={view_sell}
      animationType="slide"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <ScrollView style={{ height: "100%" }}>
        <View style={{ padding: 10 }}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity
              style={{ padding: 5 }}
              onPress={() => {
                dispatch(ChangeSale());
              }}
            >
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, paddingRight: 3, fontWeight: "600" }}>
              Finalizar venta
            </Text>
          </View>
          <DetailSell />
          <WayToPay />
          <ClientData />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          padding: 8,
          paddingHorizontal: 30,
          position: "absolute",
          bottom: 4,
          width: "100%",
          height: "7%",
        }}
        onPress={Keyboard.dismiss}
      >
        <View
          style={{
            borderRadius: 6,
            height: 40,
            backgroundColor: "rgb(39 39 42)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "rgb(245 245 245)",
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Realizar venta
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Sell;
