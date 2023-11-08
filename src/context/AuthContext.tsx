import React, { PropsWithChildren, createContext } from 'react';

type TAuthContext = {
  authValues: { authenticated: boolean; user: string | null };
  login: (userData: { user: string; password: string }) => Promise<boolean>;
  logout: () => Promise<boolean>;
};

const AuthContext = createContext<TAuthContext>({
  authValues: { authenticated: false, user: null },
  login: ({ user, password }) => Promise.resolve(false),
  logout: () => Promise.resolve(false),
});

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // the reactive values
  const [authValues, setAuthValues] = React.useState<any>({
    authenticated: false,
    user: null,
  });

  const login = ({
    user,
    password,
  }: {
    user: string;
    password: string;
  }): Promise<true | false> => {
    return new Promise((resolve) => {
      if (user === 'aaron' && password === 'aaron') {
        setAuthValues({
          authenticated: true,
          user: { user: user, id: 'aaron-100' },
        });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };

  const logout = () => {
    setAuthValues({
      authenticated: false,
      user: null,
    });
    return Promise.resolve(true);
  };

  // the store object
  let state = {
    authValues,
    login,
    logout,
  };

  // wrap the application in the provider with the initialized context
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
