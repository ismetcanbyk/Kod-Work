import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Button from "../components/Button/Button";
import InputComp from "../components/InputComp/InputComp";
import styles from "../pages/styles/Login.style";
import LoginRegisterFooter from "../components/LoginRegisterFooterImage";
import LoginRegisterTopImage from "../components/LoginRegisterTopImage";
import * as FileSystem from 'expo-file-system';
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";


function Login({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const usersData = await AsyncStorage.getItem('users');
      console.log(usersData)
      if (usersData !== null) {
        const users = JSON.parse(usersData);
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
          // Giriş başarılı
          navigation.navigate("Jobs");
          console.log("Giriş başarılı")
        } else {
          Alert.alert("Error", "Kullanıcı adı veya şifre yanlış.");
        }
      }
    } catch (error) {
      console.error("Giriş yapılırken bir hata oluştu:", error);
      Alert.alert("Error", "Bir hata oluştu, lütfen daha sonra tekrar deneyin.");
    }
  };


  return (
    <View style={styles.container}>
      <LoginRegisterTopImage />

      <View style={styles.textContainer}>
        <Text style={styles.textHello}>Hello </Text>
        <Text style={styles.textSign}>Sign in to your account</Text>
      </View>

      <InputComp name={"user-alt"} placeHolder={"Username"} onInputChange={setUsername} />
      <InputComp name={"lock"} placeHolder={"Password"} secure={true} onInputChange={setPassword} />
      <View style={styles.signInContainer}>
        <Button title={"Sign In"} iconName={"login"} onPress={handleLogin} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <View>
          <Text style={styles.footerText}>Don’t have an account? Create</Text>
        </View>
      </TouchableOpacity>

      <LoginRegisterFooter />
    </View>
  );
}

export default Login;
