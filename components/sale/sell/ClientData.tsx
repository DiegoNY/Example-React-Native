import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { InputSells } from "./InputSells";

export const ClientData = () => {
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      <Text
        style={{ paddingHorizontal: 10, paddingTop: 10, fontWeight: "500" }}
      >
        Datos del cliente
      </Text>
      <View style={{ paddingHorizontal: 10, gap: 7 }}>
        <InputSells
          name="Nombre"
          setValue={setName}
          value={name}
          type={"text"}
        />
        <InputSells name="Dni" setValue={setDni} value={dni} type={"numeric"} />
        <InputSells
          name="Numero telefono"
          setValue={setDni}
          value={dni}
          type={"numeric"}
        />
        <InputSells
          name="Correo"
          setValue={setDni}
          value={dni}
          type={"email"}
        />
        <View style={{ height: 50 }}></View>
      </View>
    </>
  );
};
