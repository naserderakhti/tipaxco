import { Link } from "react-router";
import { IoMdCall } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function NavLoginSection() {
  return (
    <div className="outline-2 outline-white w-1/2 md:w-1/4 flex flex-wrap items-center justify-around">
      <Link to="/login">
        <button className="text-baseGreen bg-slate-100 rounded-lg py-2 px-3 pb-3 cursor-pointer font-bold text-sm md:text-md">
          ورود | ثبت نام
        </button>
      </Link>
      <a href="tel:+0218457">
        <IoMdCall className="text-4xl text-white" />
      </a>
      <CiSearch className="text-4xl text-white" />
    </div>
  );
}
