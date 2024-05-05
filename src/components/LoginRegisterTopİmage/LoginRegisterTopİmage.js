import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./LoginRegisterTopİmage.style";
const LoginRegisterFooter = () => {
  return (
    <View style={styles.topImageContainer}>
      <Image
        source={require("../../../assets/Vector1.png")}
        style={styles.topImage}
      />
    </View>
  );
};

export default LoginRegisterFooter;
