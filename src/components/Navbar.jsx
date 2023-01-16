import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {BiHomeSmile} from "react-icons/bi";
import {BsHandbag} from "react-icons/bs";
import {GiGemChain,GiAllSeeingEye,GiWatch,GiTShirt} from "react-icons/gi";

import { BiShoppingBag } from "react-icons/bi";
function Navbar() {
  const [show, setShow] = useState(true);

  return (
    <>
      <nav className=" rounded-md px-5  text-[#1B4B66]">
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
          <section className="fixed z-10 md:static top-0 left-0">
            {show ? (
              <>
                <ul className=" bg-[url(https://img.freepik.com/free-vector/colorful-summer-background-zoom_23-2148582985.jpg?w=1480&t=st=1673871952~exp=1673872552~hmac=4973307ebc6d3e2a6a0afa98cf690eb98192ee000deee1321b0af4d746275aa9)] md:bg-none w-[60vw] h-[110vh] pl-10 pt-5 transition-all text-white md:bg-transparent md:w-auto md:h-auto md:text-black md:p-0 md:flex md:items-center md:text-md">
                  <span
                    className="menu bg-white transition-all md:hidden"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <div className="w-8 h-1 my-1 py-[3px] rounded-full transition-all bg-white"></div>
                    <div className="w-6 h-1 my-1 py-[3px] rounded-full transition-all bg-white"></div>
                    <div className="w-8 h-1 my-1 py-[3px] rounded-full transition-all bg-white"></div>
                  </span>
                  <li className="my-10 md:my-1 pl-2">
                    <Link className="text-3xl mr-4 " to="/">
                      CORAL'S
                    </Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2 md:mx-3 md:hidden">
                    <Link className="flex items-center" to="/"> <BiHomeSmile className="mr-1"/> Home</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2 md:mx-3">
                    <Link className="flex items-center" to="/handbags"> <BsHandbag className="mr-1"/> HandBags</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2 md:mx-3">
                    <Link className="flex items-center" to="/jewellery"><GiGemChain className="mr-1"/>Jewellery</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2 md:mx-3">
                    <Link className="flex items-center" to="/skincare"><GiAllSeeingEye className="mr-1"/>SkinCare</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2 md:mx-3">
                    <Link className="flex items-center" to="/watches"><GiWatch className="mr-1"/>Watches</Link>
                  </li>
                  <li className="my-10 md:my-1 pl-2 md:mx-3">
                    <Link className="flex items-center" to="/apparels"><GiTShirt className="mr-1"/>Apparels</Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="bg-blue-400 w-[0vw] h-[0vh] m-8 transition-all text-white"></ul>
              </>
            )}
          </section>
          <div className="md:flex justify-start items-center bg-gray-50 p-2 ml-5 rounded-md hidden md:">
            <GrSearch />
            <input
              placeholder="Search for products or brands....."
              className="min-w-[80px] w-[300px] bg-gray-50 outline-none pl-2"
              type="search"
              name="search"
              id="search-desktop "
            />
          </div>

          <span className="Logo flex items-center">
            <Link to="/" className="text-2xl mx-1 p-2 text-[#1B4B66]">
              <MdOutlineFavoriteBorder />
            </Link>
            <Link to="/" className="text-2xl mx-1 p-2 text-[#1B4B66]">
              <CgProfile />
            </Link>
            <Link to="/" className="text-2xl mx-1 p-2 text-[#1B4B66]">
              <BiShoppingBag />
            </Link>
          </span>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
