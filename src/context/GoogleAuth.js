import React, { createContext, useState, useContext } from "react";

const GoogleAuthContext = createContext();

export default function GoogleAuthProvider({ children }) {
  const [googleToken, setGoogleToken] = useState(null);

  return (
    <GoogleAuthContext.Provider
      value={{
        googleToken,
        setGoogleToken
      }}
    >
      {children}
    </GoogleAuthContext.Provider>
  );
}

export function useGoogleAuth() {
  const context = useContext(GoogleAuthContext);
  if (!context)
    throw new Error(
      "useGoogleAuth must be used within a GoogleAuthProvider"
    );
  const { googleToken, setGoogleToken } = context;
  return { googleToken, setGoogleToken };
}