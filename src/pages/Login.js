import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Button from "../components/Button/Button";
import InputComp from "../components/InputComp/InputComp";
import styles from "../pages/styles/Login.style";
import LoginRegisterFooter from "../components/LoginRegisterFooterİmage";
import LoginRegisterTopİmage from "../components/LoginRegisterTopİmage";

function Login({ navigation }) {
  const handleRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <LoginRegisterTopİmage />

      <View style={styles.textContainer}>
        <Text style={styles.textHello}>Hello </Text>
        <Text style={styles.textSign}>Sign in to your account</Text>
      </View>

      <InputComp name={"user-alt"} placeHolder={"Username"} />
      <InputComp name={"lock"} placeHolder={"Password"} />
      <View style={styles.signInContainer}>
        <Button title={"Sign In"} iconName={"login"} />
      </View>

      <TouchableOpacity onPress={handleRegister}>
        <View>
          <Text style={styles.footerText}>Don’t have an account? Create</Text>
        </View>
      </TouchableOpacity>

      <LoginRegisterFooter />
    </View>
  );
}

export default Login;
