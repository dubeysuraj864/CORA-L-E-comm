/* eslint-disable jsx-a11y/anchor-is-valid */
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import { FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer p-5 md:p-10 bg-[#1B4B61] text-white flex md:flex-row flex-col justify-between shadow">
        <div className="left flex justify-between ">
          <ul className="font-light text-sm leading-8">
            <h1 className="font-bold text-lg">Shop by Category</h1>
            <li>Skin Care</li>
            <li>Personal Care</li>
            <li>Hand Bags</li>
            <li>Apparels</li>
            <li>Watches</li>
            <li>Eye Wear</li>
            <li>Jewellery</li>
          </ul>

          <ul className=" mx-2 md:mx-10 font-light text-sm leading-8">
            <h1 className="font-bold text-lg">About</h1>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
          <ul className="font-light text-sm leading-8">
            <h1 className="font-bold text-lg">Policy</h1>
            <li>Return Policy</li>
            <li>Terms of Use</li>
            <li>Sitemap</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
        <div className="right flex flex-col justify-start items-center my-10">
          <div className="flex">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className=" w-[50px] m-1 p-2" src={fb} alt="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className=" w-[50px] m-1 p-2" src={insta} alt="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className=" w-[50px] m-1 p-2" src={twitter} alt="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className=" w-[50px] m-1 p-2" src={youtube} alt="" />
            </a>
          </div>
          <div className="flex m-4 p-2 rounded-2xl pr-2">
            <FaLocationArrow className="text-xl mr-2 text-white" /> United State
          </div>
          <div className=" mx-4">© 2023 | Suraj Dubey All Rights Reserved</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
