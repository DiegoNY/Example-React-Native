import {
    Text,
    View,
    StyleSheet,
    TouchableNativeFeedback,
} from "react-native"

export const ComplementLogin = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >¿ Olvidaste tu contraseña ?</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 8,
    },
    text: {
        fontSize: 12,
        fontWeight: "300",
        opacity: 140,
        shadowOpacity: 100,
        color: "#919191"
    }
})