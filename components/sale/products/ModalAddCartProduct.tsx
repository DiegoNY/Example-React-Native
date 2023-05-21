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
          </View>
          <InputModalProduct name="Cantidad" value="s" />
          <InputModalProduct name="Precio del producto" value="s" />

          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 27,
              paddingVertical: 10,
            }}
          >
            <Text>Total 314</Text>
            <TouchableOpacity
              style={{
                width: 140,
                backgroundColor: "#7DD3FC",
                padding: 14,
                borderRadius: 4,
                alignItems: "center",
              }}
              onPress={() => {
                dispatch(AddCardProduct({}));
                dispatch(ChangeAddModalProduct());
              }}
            >
              <Text style={{ color: "white" }}>Agregar producto</Text>
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
    backgroundColor: "#31313131",
    opacity: 60,
  },
  modalView: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    position: "absolute",
    backgroundColor: "white",
    padding: 5,
    alignItems: "center",
    height: "36%",
    width: "100%",
    bottom: 0,
    gap: 7,
  },
  titleModal: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  inputContent: {
    borderWidth: 0.3,
    borderColor: "#71717171",
  },
  input: {
    width: 300,
    padding: 3,
    paddingLeft: 17,
    borderRadius: 4,
  },
  textInput: {
    color: "#717171",
    left: 10,
  },
});
