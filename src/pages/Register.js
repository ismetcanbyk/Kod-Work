import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Button from "../components/Button/Button";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Foundation } from "@expo/vector-icons";
import InputComp from "../components/InputComp/InputComp";
import styles from "../pages/styles/Register.style";
import LoginRegisterFooter from "../components/LoginRegisterFooterİmage";
import LoginRegisterTopİmage from "../components/LoginRegisterTopİmage";

function Login({ navigation }) {
  const handleRegister = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <LoginRegisterTopİmage />

      <View style={styles.textContainer}>
        <Text style={styles.textHello}>Create Account</Text>
      </View>

      <InputComp name={"user-alt"} placeHolder={"Username"} />
      <InputComp name={"lock"} placeHolder={"Password"} />
      <InputComp name={"mail-bulk"} placeHolder={"Mail"} />
      <InputComp name={"mobile-alt"} placeHolder={"Mobile"} />

      <View style={styles.signInContainer}>
        <Button title={"Create"} iconName={"login"} />
      </View>

      <TouchableOpacity onPress={handleRegister}>
        <View>
          <Text style={styles.footerText}>Return to the previous page..</Text>
        </View>
      </TouchableOpacity>
      <LoginRegisterFooter />
    </View>
  );
}

export default Login;
