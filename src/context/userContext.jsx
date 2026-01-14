import React from "react";
import Userdata from "../data/Userdata";
import { createContext, useContext, useEffect, useState } from "react";

// 1. Création du context
const AuthContext = createContext(null);

// 2. Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔄 Charger l'utilisateur depuis le localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // 🔍 Chercher l'utilisateur dans la "fake DB"
    const foundUser = Userdata.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Email ou mot de passe incorrect",
      };
    }

    // 🔐 Données utilisateur sans le mot de passe
    const fakeUser = {
      id: foundUser.id,
      nom: foundUser.nom,
      prenom: foundUser.prenom,
      email: foundUser.email,
      telephone: foundUser.telephone,
      role: "user", // tu peux gérer admin ici
      token: "fake-jwt-token",
    };

    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));

    return {
      success: true,
      user: fakeUser,
    };
  };

  // 🚪 Déconnexion
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook personnalisé
export const useAuth = () => {
  return useContext(AuthContext);
};
