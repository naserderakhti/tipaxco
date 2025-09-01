import { Link } from "react-router";

export default function NavLoginSection() {
  return (
    <div className="outline-2 outline-white w-1/2 md:w-1/4 flex items-center">
      <Link to="/login">
        <button className="text-baseGreen bg-slate-100 rounded-lg py-2 px-3 pb-3 cursor-pointer font-bold text-sm md:text-md">
          ورود | ثبت نام
        </button>
      </Link>
    </div>
  );
}
