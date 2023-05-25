import React, { useState, useEffect } from "react";
import { TextInput, InputModeOptions } from "react-native";

export const InputSells = ({
  name,
  value,
  setValue,
  type,
}: {
  name: string;
  type: InputModeOptions;
  value: string | number;
  setValue: React.SetStateAction<string | number | any>;
}) => {
  const [val, setVal] = useState<string | number | any>("");

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <TextInput
      inputMode={type}
      placeholder={name}
      style={{
        backgroundColor: "rgb(241 245 249)",
        padding: 8,
        borderRadius: 10,
      }}
      onTextInput={(text) => {
        setValue(text);
      }}
      value={val}
    />
  );
};
