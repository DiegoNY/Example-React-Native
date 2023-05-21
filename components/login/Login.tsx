import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { ComplementLogin } from "./ComplementLogin";
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({});
  const handleButtonPress = () => {
    console.log(user);
  };
  const handleTextChange = (newText: string, name: string) => {
    setUser({ ...user, [name]: newText });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={{ justifyContent: "center", paddingTop: 10 }}>
            <Image
              style={{ resizeMode: "center", width: 302 }}
              source={require("../../assets/login_v1.png")}
            />
          </View>
          <Text style={styles.header}>Iniciar sesion</Text>
          <TextInput
            placeholder="Ingresa tu usuario"
            style={styles.textInput}
            onChangeText={(text) => handleTextChange(text, "user")}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Ingresa tu contraseña"
            style={{ ...styles.textInput, marginBottom: 36 }}
            onChangeText={(text) => handleTextChange(text, "password")}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={{ ...styles.btnContainer, width: "100%" }}
              onPress={handleButtonPress}
            >
              <Text style={styles.bntText}>Iniciar sesion</Text>
            </TouchableOpacity>
          </View>
          <ComplementLogin />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 26,
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#374151",
  },
  textInput: {
    height: 40,
    borderColor: "#91919191",
    borderWidth: 0.4,
    paddingLeft: 20,
    marginBottom: 15,
    borderRadius: 4,
  },
  btnContainer: {
    backgroundColor: "#C3B4FD",
    padding: 6,
    alignItems: "center",
    borderRadius: 3,
  },
  bntText: {
    color: "#ffff",
    fontSize: 15,
    fontWeight: "600",
  },
});
