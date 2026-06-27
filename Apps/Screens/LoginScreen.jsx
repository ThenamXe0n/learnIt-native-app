import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../utils/Colors";

const LoginScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/splashbg.png")}
        style={{
          width: "100%",
          height: 470,
          objectFit: "cover",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          Welcome To
          <Text style={{ color: Colors.PRIMARY }}> Learn It App</Text>
        </Text>
        <Text style={{ color: Colors.GRAY, textAlign: "center" }}>
          learn Programming to build real projects
        </Text>
        <TouchableOpacity
          onPress={() => console.log("click sign in")}
          style={styles.button}
        >
          <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>console.log('create new account')}>
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              color: Colors.PRIMARY,
              fontSize: 16,
            }}
          >
            Create New Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    margin: 20,
  },
});

export default LoginScreen;
