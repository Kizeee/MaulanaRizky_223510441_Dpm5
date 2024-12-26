import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import backgroundImage from "../assets/background.png";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Home Screen</Text>
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate("Detail")}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 | Maulana Rizky</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;