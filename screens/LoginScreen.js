import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
"573667648685-ffg5bg3c5rgtc6ja43v1r44cn3bgi7c4.apps.googleusercontent.com";
 
const ANDROID_CLIENT_ID =
"573667648685-89ppshj2s94i6164e1tdq1q1c1l1c4pj.apps.googleusercontent.com";

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: "573667648685-ffg5bg3c5rgtc6ja43v1r44cn3bgi7c4.apps.googleusercontent.com",
        androidClientId: "573667648685-89ppshj2s94i6164e1tdq1q1c1l1c4pj.apps.googleusercontent.com",
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login with Google" onPress={signInAsync} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});