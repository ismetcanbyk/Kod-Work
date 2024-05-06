import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./InputComp.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";




const InputComp = ({ name, placeHolder, secure = false, onInputChange }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (text) => {
    setInputValue(text);
    onInputChange(text);
  };



  return (
    <View style={styles.inputContainer}>
      <FontAwesome5
        name={name}
        size={25}
        color="black"
        style={styles.inputIcon}
      />
      <TextInput style={styles.TextInput} placeholder={placeHolder} value={inputValue} onChangeText={handleInputChange} secureTextEntry={secure} />
    </View>
  );
};

export default InputComp;
