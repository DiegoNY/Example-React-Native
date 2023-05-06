import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../components/Home.components";
import { DetailsScreen } from "../components/Detail.components";
import { Text, View } from 'react-native'

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {

    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
            }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}