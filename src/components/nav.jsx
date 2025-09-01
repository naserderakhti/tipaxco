import { Link } from "react-router";
import logoImg from "/images/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
export default function Nav() {
  return (
    <nav className="bg-baseGreen/95">
      <div className="container flex flex-row justify-between">
        <div className="w-1/4">login info</div>
        <div className="outline-2 outline-amber-400 py-3 w-1/4 self-end flex flex-row justify-end">
          <Link to="/" end>
            <img src={logoImg} alt="logo" className="w-32" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
