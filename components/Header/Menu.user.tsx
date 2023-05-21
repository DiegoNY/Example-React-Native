import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export const MenuUser = () => {
  return (
    <View style={{ paddingLeft: 20 }}>
      <View
        style={{
          backgroundColor: "#BDF265",
          borderRadius: 100,
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="user" size={23} color="black" />
      </View>
    </View>
  );
};
