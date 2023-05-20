import React, { useState, useEffect } from "react";
import "./styles/styles.css";

import { AuthContext } from "./context";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
