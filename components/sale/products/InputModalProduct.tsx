import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Animated,
  Pressable,
} from "react-native";
import { useState, useRef } from "react";

export const InputModalProduct = ({
  name,
}: {
  name: string;
  value: string;
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const input_ref = useRef<TextInput>(null);
  const move_text = useRef(new Animated.Value(20)).current;

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onMoveText = (value: number = 36) => {
    Animated.timing(move_text, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePress = () => {
    onMoveText();
    setFocus(true);
    input_ref.current?.focus();
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
  };

  const handleBlur = () => {
    hideTimeoutRef.current = setTimeout(() => {
      if (value.length === 0) {
        onMoveText(20);
        setFocus(false);
      } else {
        setFocus(true);
      }
    }, 200);
  };

  return (
    <Pressable
      style={[
        style.inputContent,
        focus ? { borderColor: "#B9E6FD", borderWidth: 1.2 } : {},
      ]}
      onPress={handlePress}
    >
      <Animated.Text
        style={[
          style.textInput,
          {
            bottom: move_text,
          },
          focus ? {} : {},
        ]}
      >
        {name}
      </Animated.Text>
      <TextInput
        ref={input_ref}
        keyboardType="number-pad"
        onChangeText={(text) => setValue(text)}
        style={[style.input]}
        onBlur={handleBlur}
        onFocus={() => {
          handlePress();
          if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
          }
        }}
      />
    </Pressable>
  );
};

const style = StyleSheet.create({
  inputContent: {
    position: "relative",
    paddingHorizontal: 10,
    width: 300,
    padding: 2,
    height: 60,
    borderWidth: 0.3,
    borderColor: "#71717171",
    justifyContent: "center",
  },
  input: {
    borderRadius: 4,
  },
  textInput: {
    position: "absolute",
    color: "#717171",
    left: 10,
  },
});
