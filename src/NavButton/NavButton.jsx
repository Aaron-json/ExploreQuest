import "./NavButton.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function NavButton({ title, path }) {
  const navigator = useNavigate();
  return (
    <NavLink to={`/${path}`} className="nav-button">
      {title}
    </NavLink>
  );
}
