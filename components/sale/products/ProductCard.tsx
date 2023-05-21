import { Image, Text, View, TouchableNativeFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { ChangeAddModalProduct } from "../../../libs/redux/feature/SaleSlice.feature";
export const ProductCard = () => {
  const dispatch = useDispatch();
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple("#3A83F5", false)}
      onPress={() => {
        dispatch(ChangeAddModalProduct());
      }}
    >
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 3 }}>
        <View
          style={{
            padding: 4,
            width: 120,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 70, width: 70, resizeMode: "center" }}
            source={require("../../../assets/donut.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 15 }}>Nombre del producto</Text>
          <Text style={{ fontSize: 13 }}>
            The Apollotech B340 is an affordable wireless mouse with
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#22C55E",
            minWidth: 33,
            maxWidth: 80,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            paddingHorizontal: 9,
            paddingVertical: 4,
            position: "absolute",
          }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>S/15</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
