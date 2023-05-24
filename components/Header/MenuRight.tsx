import { View, Text, TouchableNativeFeedback, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../libs/redux/store";
import { ChangeCardProduct } from "../../libs/redux/feature/SaleSlice.feature";

export default function MenuRight(props: any) {
  const { navigation, route } = props;
  const [isSale, setSale] = useState(false);
  const sale = useSelector((state: RootState) => state.sale);
  const dispatch = useDispatch();

  useEffect(() => {
    route.navigation.isFocused() && route.route.name == "Venta"
      ? setSale(true)
      : setSale(false);
  }, [props]);

  return (
    <View
      style={{
        alignItems: "center",
        gap: 2,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 4,
        paddingRight: 20,
      }}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          "rgb(186 230 253)",
          false,
          20
        )}
      >
        <View style={{ padding: 10 }}>
          <Feather name="inbox" size={24} color="black" />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          "rgb(186 230 253)",
          false,
          20
        )}
      >
        <View style={{ padding: 10 }}>
          <Feather name="message-square" size={24} color="black" />
        </View>
      </TouchableNativeFeedback>
      {isSale && (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple("rgb(186 230 253)", false)}
          onPress={() => {
            dispatch(ChangeCardProduct());
          }}
        >
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              gap: 4,
              backgroundColor: "rgb(241 245 249)",
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Feather name="shopping-cart" size={14} color="black" />
            <Text style={{ fontSize: 12, fontWeight: "400" }}>Productos</Text>
            <Text style={{ fontSize: 12, fontWeight: "400" }}>
              {sale.products_card.length}{" "}
            </Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </View>
  );
}
