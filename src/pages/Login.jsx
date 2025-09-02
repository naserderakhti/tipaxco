import { Link } from "react-router";
import Nav from "../components/nav";

function LoginPage() {
  return (
    <>
      <Nav />
      <header className="h-[75vh] mt-18 outline outline-black flex justify-center items-center">
        <section className="w-full sm:w-2/5  border border-baseGreen rounded-2xl p-4 flex flex-col items-center">
          <h1 className="text-baseGreen text-center font-bold mb-4">
            ورود یا ثبت نام
          </h1>
          <input
            className="w-4/5 bg-slate-100 dir-rtl rounded-xl px-3 py-2 placeholder:text-[14px] outline-0 placeholder:text-slate-600 mb-6"
            type="text"
            placeholder="شماره موبایل"
          />
          <p className="dir-rtl">
            با ورود یا ثبت نام با{" "}
            <Link className="text-baseGreen" to="/conditions">
              کلیه قوانین و شرایط
            </Link>{" "}
            موافقت می کنم.
          </p>
        </section>
      </header>
    </>
  );
}

export default LoginPage;
