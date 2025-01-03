import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  avatar?: string;
  email: string;
}

// Definizione dell'utente di default
const defaultUser: User = {
  id: 'default_id',
  name: 'Utente Demo',
  email: 'demo@example.com',
  avatar: 'https://i.pravatar.cc/150?img=67' // URL di un'immagine placeholder
};

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Inizializza lo stato con l'utente di default
  const [user, setUser] = useState<User | null>(defaultUser);

  const value = {
    user,
    setUser,
    isAuthenticated: user !== null,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 