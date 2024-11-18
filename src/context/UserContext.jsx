import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ user, children }) {
  const state = useState(user);
  return (
      <UserContext.Provider value={state}>
        {children}
      </UserContext.Provider>
  );
}
export function useUser() {
  return useContext(UserContext);
}