import { Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export const DetailSell = () => {
  return (
    <>
      <Text
        style={{ paddingHorizontal: 10, paddingTop: 10, fontWeight: "500" }}
      >
        Detalle de la venta
      </Text>
      <View
        style={{
          marginHorizontal: 8,
          padding: 10,
          backgroundColor: "rgb(219 234 254)",
          borderRadius: 5,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "20%",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Feather name="dollar-sign" size={24} color="black" />
        </View>
        <View>
          <View>
            <Text style={{ color: "rgb(71 85 105)" }}>
              Cantidad de productos
            </Text>
            <Text style={{ color: "rgb(71 85 105)", fontWeight: "600" }}>
              1
            </Text>
          </View>
          <View
            style={{
              width: "74%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "rgb(148 163 184)", fontWeight: "400" }}>
              Total de la venta
            </Text>
            <Text style={{ color: "rgb(71 85 105)", fontWeight: "bold" }}>
              S/ 60
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
