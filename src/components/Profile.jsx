import { useContext } from "react";
import { AuthContext } from "../App";

export function Profile() {
  const { user, login, logout } = useContext(AuthContext);

  const handleLogin = () => {
    // Qui sto simulando una persona  che inserisce i dati
    const mockUser = { name: "Mario Rossi", email: "mariorossi@mail.com" };
    login(mockUser);
  };
  const handleLogout = () => {
    logout();
  };

  if (user) {
    return (
      <div>
        <h2>Profilo Utente</h2>
        <p>Nome: {user.name}</p>
        <p>Email: {user.mail}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Utente non autenticato.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return;
}
