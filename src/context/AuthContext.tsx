import React, { createContext, useState, useEffect, ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';

type User = {
  id: string;
  name: string;
  email: string;
} | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStoredUser = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync('user');

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.warn('Error loading user from SecureStore:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStoredUser();
  }, []);

  const login = async (email: string, password: string) => {
    console.log('login', email, password);
    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newUser = { id: '1', name: 'John Doe', email };
    setUser(newUser);
    await SecureStore.setItemAsync('user', JSON.stringify(newUser));
  };

  const signup = async (email: string, password: string, name: string): Promise<void> => {
    // Simulate signup delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newUser = { id: '1', name, email, password };
    setUser(newUser);
    await SecureStore.setItemAsync('user', JSON.stringify(newUser));
  };

  const logout = async () => {
    // Simulate logout delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser(null);
    await SecureStore.deleteItemAsync('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
