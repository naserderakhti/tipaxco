import { Link } from "react-router";
import logoImg from "/images/logo.svg";
import { IoMenuOutline } from "react-icons/io5";

export default function Nav() {
  return (
    <nav className="bg-baseGreen/95">
      <div className="container px-8 flex flex-row justify-between">
        <div className="w-1/4">login info</div>
        <div className="py-3 w-1/4 self-end flex flex-row justify-around items-center">
          <Link to="/" end>
            <img src={logoImg} alt="logo" className="w-32" />
          </Link>
          <IoMenuOutline className="text-white text-5xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
