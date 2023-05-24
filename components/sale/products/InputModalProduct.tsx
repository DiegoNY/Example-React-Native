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
  setValues,
}: {
  name: string;
  value: string;
  setValues: any;
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const [blur, setBlur] = useState(false);

  const input_ref = useRef<TextInput>(null);
  const move_text = useRef(new Animated.Value(12)).current;
  const size_animated = useRef(new Animated.Value(14)).current;

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onMoveText = (value: number = 36) => {
    Animated.timing(move_text, {
      toValue: value,
      duration: 100,
      useNativeDriver: false,
      delay: 1.3,
    }).start();
  };

  const onSizeText = (value: number = 13) => {
    Animated.timing(size_animated, {
      toValue: value,
      duration: 100,
      useNativeDriver: false,
      delay: 1.3,
    }).start();
  };

  const handlePress = () => {
    onMoveText();
    onSizeText();
    setFocus(true);
    input_ref.current?.focus();
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
  };

  const handleBlur = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setBlur(false);
      if (value.length === 0) {
        onMoveText(12);
        onSizeText(14);
        setFocus(false);
      } else {
        setFocus(true);
      }
    }, 200);
  };

  return (
    <Pressable onPress={handlePress}>
      <TextInput
        ref={input_ref}
        placeholder={name}
        keyboardType="number-pad"
        onChangeText={(text) => {
          setValue(text);
          setValues(text);
        }}
        style={[style.inputContent]}
        onBlur={handleBlur}
        onFocus={() => {
          setBlur(true);
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
    height: 45,
    backgroundColor: "rgb(241 245 249)",
    justifyContent: "center",
    borderRadius: 6,
  },
  input: {
    borderRadius: 4,
  },
  textInput: {},
});
