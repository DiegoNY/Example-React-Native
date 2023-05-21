import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../components/Home.components";
import { DetailsScreen } from "../components/Detail.components";
import { Text, View } from "react-native";
import { SecondScreen } from "../components/sale/Second.sale.screen";
import { PrincipalScreen } from "../components/sale/Principal.sale.screen";

const SaleStack = createNativeStackNavigator();

export const SaleStackScreen = () => {
  return (
    <SaleStack.Navigator
      initialRouteName="Venta"
      screenOptions={(route) => {
        let headerShown = true;
        if (route.route.name == "principal") {
          headerShown = false;
        }
        return {
          headerShown,
        };
      }}
    >
      <SaleStack.Screen name="principal" component={PrincipalScreen} />
      <SaleStack.Screen name="second" component={SecondScreen} />
    </SaleStack.Navigator>
  );
};
