import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./LoginRegisterFooterİmage.style";
const LoginRegisterFooter = () => {
  return (
    <View style={styles.footerImageContainer}>
      <Image
        source={require("../../../assets/Vector2.png")}
        style={styles.footerımage}
      />
    </View>
  );
};

export default LoginRegisterFooter;
