import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import backgroundImage from "../assets/background.png";

const HomeScreen = ({ navigation }) => {
  const buttonScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.8)"]}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Home Screen</Text>
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => navigation.navigate("Detail")}
          >
            <Animated.View
              style={[styles.button, { transform: [{ scale: buttonScale }] }]}
            >
              <Ionicons name="arrow-forward" size={24} color="white" />
              <Text style={styles.buttonTitle}>Go to Detail</Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 | Maulana Rizky</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#007bff",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  footer: {
    position: "absolute",
    bottom: 20,
  },
  footerText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default HomeScreen;
