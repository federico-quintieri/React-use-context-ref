import { useContext } from "react";
import { ThemeContext } from "../App";

export function Card({ titolo, paragrafo }) {
  const ThemeFromParent = useContext(ThemeContext);

  return (
    <div className={`card  ${ThemeFromParent}`}>
      <h3 className="card-title">{titolo}</h3>
      <img src="" alt="" />
      <div className="card-content">
        <p className="card-text">{paragrafo}</p>
      </div>
      <div className="card-footer">
        <button>Footer</button>
      </div>
    </div>
  );
}
