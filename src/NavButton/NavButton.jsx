import "./NavButton.css";
import { useNavigate } from "react-router-dom";

export default function NavButton({ title, path }) {
  const navigator = useNavigate();
  return (
    <button onClick={() => navigator(`/${path}`)} className="nav-button">
      {title}
    </button>
  );
}
