import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../libs/redux/store";
import { ChangeCardProduct } from "../../../libs/redux/feature/SaleSlice.feature";
import { Feather } from "@expo/vector-icons";
import { NotProductCart } from "./NotProductsCart";

export const ModalCartProduct = () => {
  const sale = useSelector((state: RootState) => state.sale);
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={sale.view_card_product}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={style.modalView}>
        <View style={style.titleModal}>
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => dispatch(ChangeCardProduct())}
          >
            <Feather name="x" size={27} color="black" />
          </TouchableOpacity>
          <Text style={style.modalText}>Productos en el carrito</Text>
        </View>
        {sale.products_card.length == 0 ? <NotProductCart /> : <Text>s</Text>}
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    padding: 5,
    alignItems: "center",
    height: "100%",
  },
  titleModal: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: "center",
  },
  modalText: {
    fontSize: 19,
    width: "90%",
    paddingLeft: 43,
  },
  contentCenter: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
});
