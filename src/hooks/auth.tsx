import {createContext, ReactNode, useContext} from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext([]);

const AuthProvider = ({children}: AuthProviderProps) => {
  return <AuthContext.Provider value={[]}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export {AuthProvider, useAuth};
