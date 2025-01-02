import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Button, Card } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import backgroundImage from "../assets/detail-background.png";

const DetailScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.8)"]}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Detail Screen</Text>
          <Card containerStyle={styles.card}>
            <Text style={styles.cardText}>
              This is the detail of the selected item.
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Button
                icon={<Ionicons name="arrow-back" size={15} color="white" />}
                title="Back"
                buttonStyle={styles.button}
              />
            </TouchableOpacity>
          </Card>
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
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  card: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  cardText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
});

export default DetailScreen;
