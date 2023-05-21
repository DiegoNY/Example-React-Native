import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./Home.screen";
import { SettingsStackScreen } from "./Setting.screen";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { MenuUser } from "../components/Header/Menu.user";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MenuRight from "../components/Header/MenuRight";
import React from "react";
import { SaleStackScreen } from "./Sale.screen";

const Tab = createBottomTabNavigator();
export const Screens = () => {
  const tabs = [
    {
      name: "Inicio",
      component: HomeStackScreen,
      icon: <Feather name="grid" size={21} color="black" />,
      permissions: [1],
    },
    {
      name: "Reportes",
      component: SettingsStackScreen,
      icon: <Feather name="activity" size={21} color="black" />,
      permissions: [1],
    },
    {
      name: "Venta",
      component: SaleStackScreen,
      icon: <Feather name="shopping-bag" size={21} color="black" />,
      permissions: [1],
    },
    {
      name: "Configurar",
      component: SettingsStackScreen,
      icon: <Feather name="settings" size={21} color="black" />,
      permissions: [1],
    },
  ];
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => {
          const menu = () => {
            return <MenuRight route={{ route, navigation }} />;
          };
          return {
            headerShown: true,
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            tabBarStyle: {
              height: 60,
              borderRadius: 10,
              paddingBottom: 10,
            },
            headerLeft: MenuUser,
            headerRight: menu,
          };
        }}
      >
        {tabs.map((info) => {
          const { component, icon, name, permissions } = info;
          return (
            <Tab.Screen
              name={name}
              component={component}
              options={{
                tabBarIcon: () => {
                  return icon;
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
