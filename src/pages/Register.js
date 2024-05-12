import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Button from "../components/Button/Button";
import InputComp from "../components/InputComp/InputComp";
import styles from "../pages/styles/Register.style";
import LoginRegisterFooter from "../components/LoginRegisterFooterImage";
import LoginRegisterTopImage from "../components/LoginRegisterTopImage";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');


  const handleRegister = async () => {
    try {
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];
      const newUser = { username, password, email, mobile };
      const existingUser = users.find(user => user.username === username);
      if (existingUser) {
        Alert.alert("Error", "Bu kullanıcı adı zaten kullanılıyor.");
      } else {
        users.push(newUser);
        await AsyncStorage.setItem('users', JSON.stringify(users));
        Alert.alert("Success", "Hesabınız başarıyla oluşturuldu, lütfen giriş yapın.");
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Kayıt olunurken bir hata oluştu:", error);
      Alert.alert("Error", "Bir hata oluştu, lütfen daha sonra tekrar deneyin.");
    }
  };

  const handleReturn = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <LoginRegisterTopImage />

      <View style={styles.textContainer}>
        <Text style={styles.textHello}>Create Account</Text>
      </View>

      <InputComp name={"user-alt"} placeHolder={"Username"} onInputChange={setUsername} />
      <InputComp name={"lock"} placeHolder={"Password"} secure={true} onInputChange={setPassword} />
      <InputComp name={"mail-bulk"} placeHolder={"Mail"} onInputChange={setEmail} />
      <InputComp name={"mobile-alt"} placeHolder={"Mobile"} onInputChange={setMobile} />

      <View style={styles.signInContainer}>
        <Button title={"Create"} iconName={"login"} onPress={handleRegister} />
      </View>

      <TouchableOpacity onPress={handleReturn}>
        <View>
          <Text style={styles.footerText}>Return to the previous page..</Text>
        </View>
      </TouchableOpacity>
      <LoginRegisterFooter />
    </View>
  );
}

export default Register;
