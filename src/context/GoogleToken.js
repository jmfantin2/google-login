import React, { createContext, useState, useContext } from "react";

const GoogleTokenContext = createContext();

export default function GoogleTokenProvider({ children }) {
  const [googleToken, setGoogleToken] = useState('');

  return (
    <GoogleTokenContext.Provider
      value={{
        googleToken,
        setGoogleToken,
      }}
    >
      {children}
    </GoogleTokenContext.Provider>
  );
}

export function useGoogleToken() {
  const context = useContext(GoogleTokenContext);
  if (!context)
    throw new Error(
      "useGoogleToken must be used within a GoogleTokenProvider"
    );
  const { googleToken, setGoogleToken } = context;
  return { googleToken, setGoogleToken };
}