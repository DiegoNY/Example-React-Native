import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "../components/Setting.components";
import { DetailsScreen } from "../components/Detail.components";

const SettingsStack = createNativeStackNavigator();

export const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator screenOptions={{}}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};
