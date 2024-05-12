import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./LoginRegisterFooterImage.style";
const LoginRegisterFooter = () => {
  return (
    <View style={styles.footerImageContainer}>
      <Image
        source={require("../../../assets/Vector2.png")}
        style={styles.footerImage}
      />
    </View>
  );
};

export default LoginRegisterFooter;
