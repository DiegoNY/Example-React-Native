import { Image, Text, View, TouchableNativeFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { ChangeAddModalProduct } from "../../../libs/redux/feature/SaleSlice.feature";
export const ProductCard = () => {
  const dispatch = useDispatch();
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple("rgb(186 230 253)", false)}
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
            source={require("../../../assets/Miroodles.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 15 }}>Nombre del producto</Text>
          <Text style={{ fontSize: 13 }}>
            The Apollotech B340 is an affordable wireless mouse with
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "60%",
            }}
          >
            <Text>S/15</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
