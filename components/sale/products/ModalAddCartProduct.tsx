import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../libs/redux/store";
import {
  AddCardProduct,
  ChangeAddModalProduct,
} from "../../../libs/redux/feature/SaleSlice.feature";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { InputModalProduct } from "./InputModalProduct";

export const ModalAddCartProduct = () => {
  const sale = useSelector((state: RootState) => state.sale);
  const dispatch = useDispatch();

  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={sale.view_modal_add_product}
    >
      <View style={style.modal}>
        <View style={style.modalView}>
          <View style={style.titleModal}>
            <TouchableOpacity
              style={{ padding: 5 }}
              onPress={() => dispatch(ChangeAddModalProduct())}
            >
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 26, fontSize: 13.5 }}>
              Precio total del producto S/{cantidad * precio}
            </Text>
          </View>
          <InputModalProduct
            name="Cantidad"
            value="s"
            setValues={setCantidad}
          />
          <InputModalProduct
            name="Precio del producto"
            value="s"
            setValues={setPrecio}
          />

          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 27,
              paddingVertical: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "rgb(39 39 42)",
                padding: 14,
                borderRadius: 8,
                alignItems: "center",
              }}
              onPress={() => {
                dispatch(AddCardProduct({}));
                dispatch(ChangeAddModalProduct());
              }}
            >
              <Text style={{ color: "rgb(245 245 245)", fontWeight: "600" }}>
                Agregar producto al carrito
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modal: {
    height: "100%",
    opacity: 60,
    paddingHorizontal: 5,
  },
  modalView: {
    marginLeft: 10,
    borderWidth: 0.4,
    borderColor: "rgb(203 213 225)",
    borderRadius: 20,
    position: "absolute",
    backgroundColor: "white",
    padding: 5,
    alignItems: "center",
    height: "36%",
    width: "96%",
    bottom: 11,
    gap: 11,
    display: "flex",
  },
  titleModal: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 300,
    padding: 3,
    paddingLeft: 17,
    borderRadius: 4,
  },
});
