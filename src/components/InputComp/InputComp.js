import { View, Text } from "react-native";
import React from "react";
import styles from "./InputComp.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
const InputComp = ({ name, placeHolder }) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome5
        name={name}
        size={25}
        color="black"
        style={styles.inputIcon}
      />
      <TextInput style={styles.TextInput} placeholder={placeHolder} />
    </View>
  );
};

export default InputComp;
