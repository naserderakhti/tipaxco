import { Link } from "react-router";
import logoImg from "/images/logo.svg";
import { IoMenuOutline } from "react-icons/io5";
import NavLoginSection from "./NavLoginSection";

export default function Nav() {
  return (
    <nav className="bg-baseGreen/95 fixed top-0 w-full">
      <div className="container md:px-8 flex flex-row justify-between">
        <NavLoginSection />
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
