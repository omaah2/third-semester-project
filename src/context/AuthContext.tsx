import React, { createContext, useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase";

// Define the shape of your user object
interface User {
  id: string;
  email: string;
}

// Define the shape of your authentication context
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Create the context with initial values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
});

// Create a custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Create a provider component to wrap your app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(app);

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userCredential.user;
      if (userData) {
        setUser({ id: userData.uid!, email: userData.email! });
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle error
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userCredential.user;
      if (userData) {
        setUser({ id: userData.uid!, email: userData.email! });
      }
    } catch (error) {
      console.error("Signup error:", error);
      // Handle error
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
