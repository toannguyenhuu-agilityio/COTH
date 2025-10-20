import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '@/hooks';

export const ProfileScreen = () => {
  const { logout, user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      {user && <Text style={styles.subtext}>Logged in as: {user.email}</Text>}
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 14,
    marginBottom: 16,
  },
});
