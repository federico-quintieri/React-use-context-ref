import { useState, createContext } from "react";
import { Card } from "./components/Card";
import { Profile } from "./components/Profile";
import { Timer } from "./components/Timer";
import { Form } from "./components/Form";

// Creo context e lo esporto
export const ThemeContext = createContext();

export const AuthContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  // Callback per cambiare tema context da parent
  const cambioTema = (event) => {
    setTheme((prev_theme) => (prev_theme === "light" ? "dark" : "light"));
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = (userData) => {
    setUser(null);
  };

  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <>
      {/* Uso un provider per passare una variabile ai  miei componenti */}
      <button onClick={cambioTema}>Cambia tema</button>
      <ThemeContext.Provider value={theme}>
        <Card titolo="Sono una card" paragrafo="Paragrafo card"></Card>
      </ThemeContext.Provider>

      {/* Provider per autenticazione */}
      <AuthContext.Provider value={authContextValue}>
        <Profile></Profile>
      </AuthContext.Provider>

      <Timer></Timer>

      <Form></Form>
    </>
  );
}

export default App;
