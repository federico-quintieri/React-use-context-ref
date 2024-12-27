// Form con 3 input: nome, email, messaggio
// Quando premi Tab o invii passa automaticamente al campo successivo
// L'ultimo campo ha un pulsante "Torna al primo campo"
// Usa useRef per gestire il focus degli input
import { useRef } from "react";

export function Form() {
  const refNome = useRef();
  const refMail = useRef();
  const refMessaggio = useRef();

  // Callback che gestisce passaggio a input successivo
  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Tab" || e.key === "Enter") {
      e.preventDefault(); // Impedisco refresh pagina
      nextRef.current.focus(); // Passa il focus al prossimo campo
    }
  };

  // Callback che gestisce passaggio ultimo input
  const handleLastField = (e) => {
    e.preventDefault();
    refNome.current.focus();
  };

  // Gestisce lo stile quando un input riceve il focus
  const handleFocus = (ref) => {
    ref.current.style.backgroundColor = "	#FFFF00";
    ref.current.style.border = "2px solid #007bff";
  };

  // Ripristina lo stile originale quando un input perde il focus
  const handleBlur = (ref) => {
    ref.current.style.backgroundColor = "";
    ref.current.style.border = "";
  };

  return (
    <form action="">
      <label htmlFor="nome">
        Inserisci nome
        <input
          id="nome"
          type="text"
          ref={refNome}
          onKeyDown={(e) => handleKeyDown(e, refMail)}
          onFocus={() => handleFocus(refNome)}
          onBlur={() => handleBlur(refNome)}
        />
      </label>
      <label htmlFor="mail">
        Inserisci mail
        <input
          id="mail"
          type="email"
          ref={refMail}
          onKeyDown={(e) => handleKeyDown(e, refMessaggio)}
          onFocus={() => handleFocus(refMail)}
          onBlur={() => handleBlur(refMail)}
        />
      </label>
      <label htmlFor="messaggio">
        Inserisci messaggio
        <textarea
          id="messaggio"
          type="text"
          ref={refMessaggio}
          onFocus={() => handleFocus(refMessaggio)}
          onBlur={() => handleBlur(refMessaggio)}
        />
      </label>
      <button onClick={handleLastField}>Torna al primo campo</button>
    </form>
  );
}
