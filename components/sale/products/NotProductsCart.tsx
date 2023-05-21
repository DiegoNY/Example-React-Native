import { Image, Text, View, TouchableNativeFeedback } from "react-native";
export const NotProductCart = () => {
  return (
    <View
      style={{
        padding: 4,
        borderRadius: 2,
        alignItems: "center",
        height: "60%",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ height: 70, width: 70, resizeMode: "center" }}
        source={require("../../../assets/carrito.png")}
      />
      <Text style={{ top: 5 }}>No hay productos seleccionados</Text>
    </View>
  );
};
