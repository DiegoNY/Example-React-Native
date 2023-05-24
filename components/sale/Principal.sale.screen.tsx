import {
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Product } from "./products/Products.component";
import { Feather } from "@expo/vector-icons";
import { ModalCartProduct } from "./products/ModalCartProducts";
import { ModalAddCartProduct } from "./products/ModalAddCartProduct";
import Sell from "./Sell";
import { ChangeSale } from "../../libs/redux/feature/SaleSlice.feature";
import { useDispatch } from "react-redux";

export const PrincipalScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{ backgroundColor: "#ffffff", height: "100%", flex: 1, gap: 3 }}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Productos</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          alignItems: "center",
          flexDirection: "row",
          gap: 3,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
            padding: 4,
            paddingVertical: 8,
            backgroundColor: "rgb(241 245 249)",
            width: "100%",
            borderRadius: 10,
          }}
        >
          <Feather name="search" size={18} color="black" />
          <TextInput
            style={{ width: "100%" }}
            placeholder="Nombre del producto "
          />
        </View>
      </View>
      <ScrollView
        style={{
          padding: 20,
          columnGap: 10,
          marginVertical: 4,
        }}
      >
        <FlatList
          style={{ marginBottom: 25 }}
          data={[{ data: "1" }, {}, {}, {}, {}, {}, {}]}
          renderItem={({ item }) => {
            return <Product />;
          }}
        />
      </ScrollView>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 10,
          alignItems: "center",
          position: "absolute",
          bottom: 10,
          right: 20,
        }}
        onPress={() => {
          dispatch(ChangeSale());
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(224 242 254)",
            width: 140,
            padding: 10,
            borderRadius: 10,
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: "rgb(37 99 235)",
            }}
          >
            Siguiente paso
          </Text>
          <Feather name="chevron-right" size={20} color="rgb(37 99 235)" />
        </View>
      </TouchableOpacity>
      <ModalCartProduct />
      <ModalAddCartProduct />
      <Sell />
    </View>
  );
};
