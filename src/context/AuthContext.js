import React, { createContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password); 
      setUser(response.user);
      console.log('User logged in:', response.user);
      return response;
    } catch (error) {
      console.error('Login error:', error);
      return error;
    }
  };

  const logout = () => {
    auth.signOut(); 
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
