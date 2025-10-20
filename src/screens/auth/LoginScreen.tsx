import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useAuth } from "@/hooks";

export const LoginScreen = () => {
  const { login } = useAuth();

  const handleLogin = async () => {
    await login("test@example.com", "password123");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button title="Login (placeholder)" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
  },
});
