import { Text, View, Modal, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../libs/redux/store";
import { ChangeSale } from "../../libs/redux/feature/SaleSlice.feature";

export const Sell = () => {
  const { view_sell } = useSelector((state: RootState) => state.sale);
  const dispatch = useDispatch();
  return (
    <Modal
      visible={view_sell}
      animationType="slide"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
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
                600
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
      </View>
      <TouchableOpacity
        style={{
          padding: 8,
          position: "absolute",
          bottom: 4,
          width: "100%",
          height: "7%",
        }}
      >
        <Text
          style={{
            padding: 20,
            backgroundColor: "rgb(186 230 253)",
            color: "rgb(29 78 216)",
            alignItems: "center",
          }}
        >
          Realizar venta
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default Sell;
