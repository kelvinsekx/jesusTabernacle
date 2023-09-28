'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  loggedIn: boolean;
  login: (string) => "login" | null ;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const login = (txt: string) => {
    // Simulate a successful login, e.g., by setting loggedIn to true
    if(txt === 'password'){
         setLoggedIn(true);
         return "login"
    }
    return null
  };

  const logout = () => {
    // Simulate a logout by setting loggedIn to false
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
