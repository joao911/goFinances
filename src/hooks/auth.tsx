import React, {ReactNode, createContext, useContext} from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  photo?: string;
}
interface IAuthContextData {
  user: IUser;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const user: {
    id: '1223445';
    name: 'João Paulo';
    email: 'joaopaulolacerda911@gmail,.com';
  };

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}

function useAth() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAth};
