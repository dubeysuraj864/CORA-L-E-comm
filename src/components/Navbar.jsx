import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { GrNotification, GrSearch, GrAddCircle } from "react-icons/gr";
function Navbar() {
  const [show, setShow] = useState(true);

  return (
    <>
      <nav className="bg-gray-100 rounded-md">
        <div className="flex justify-between items-center py-4 md:mx-10">
          <div
            className="menu ml-4 flex items-center transition-all md:hidden"
            onClick={() => {
              setShow(!show);
            }}
          >
            <div>
              <div className="w-4 h-1 my-1 py-[3px] rounded-full transition-all bg-black"></div>
              <div className="w-8 h-1 my-1 py-[3px] rounded-full transition-all bg-black"></div>
              <div className="w-8 h-1 my-1 py-[3px] rounded-full transition-all bg-black"></div>
            </div>
          </div>
          <section className="absolute md:static  top-0 left-0">
            {show ? (
              <>
                <ul className="bg-blue-400 w-[60vw] h-[100vh] p-8 transition-all text-white md:bg-transparent md:w-auto md:h-auto md:text-black md:p-0 md:flex md:items-center md:text-sm">
                  <span
                    className="menu bg-white transition-all md:hidden"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <div className="w-8 h-1 my-1 py-[3px] rounded-full transition-all bg-black"></div>
                    <div className="w-6 h-1 my-1 py-[3px] rounded-full transition-all bg-black"></div>
                    <div className="w-8 h-1 my-1 py-[3px] rounded-full transition-all bg-black"></div>
                  </span>
                  <li className="my-10 md:my-1 pl-2">
                    <Link className="text-3xl mr-4 " to="/">CORAL'S</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2 md:hidden">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2">
                    <Link to="/handbags">HandBags</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2">
                    <Link to="/jewellery">Jewellery</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2">
                    <Link to="/skincare">SkinCare</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2">
                    <Link to="/watches">Watches</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2">
                    <Link to="/apparels">Apparels</Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="bg-blue-400 w-[0vw] h-[0vh] m-8 transition-all text-white"></ul>
              </>
            )}
          </section>

          <span className="Logo flex items-center">
           
            <Link to="/" className="text-xl mx-1 p-2 text-[#1B4B66]">
              <GrAddCircle />
            </Link>
            <Link to="/" className="text-xl mx-1 p-2 text-[#1B4B66]">
              <GrSearch />
            </Link>
            <Link to="/" className="text-xl mx-1 p-2 text-[#1B4B66]">
              <GrNotification />
            </Link>
          </span>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
