import Bag from "../images/pinkbag.png";
import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import {RiMoneyDollarCircleFill} from "react-icons/ri"
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
function ProductPage(props) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="product-page m-10 flex justify-center item-start">
        <div className="left">
          <img src={Bag} className="w-[400px] h-[400px]" alt="" />
        </div>
        <div className="right mx-10">
          <div className="title text-4xl font-bold">Coach</div>
          <div className="category my-2 text-gray-500">
            Leather Coach Bag with adjustable starps.
          </div>
          <div className="stars flex items-center text-orange-400 my-0.5 ">
            <span className="flex items-center mr-3 text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </span>{" "}
            <span className="text-sm text-gray-600 opacity-90">
              545 Ratings
            </span>
          </div>
          <div className="price flex items-center my-4">
            <div className="price-now mr-1 text-3xl font-bold ">$45.4</div>
            <div className="price-before  ">
              $<del className="text-gray-500">69.49</del>{" "}
              <span className="text-red-500">50% OFF</span>
            </div>
          </div>
          <hr />
          <div className="pin-code flex items-center my-3">
            <div className="left w-2/3 my-2 mr-4">
              <h1 className="font-bold">Delivery Details</h1>
              <h2 className="text-gray-500 text-sm">
                Check estimated delivery <br /> date/pickup option.
              </h2>
            </div>
            <div className="right flex my-2 bg-gray-100 rounded-md p-2">
              <input
                type="text"
                className="bg-gray-100 outline-none"
                placeholder="Apply Valid Pincode"
              />
              <button>CHECK</button>
            </div>
          </div>
          <div className="quantity flex items-center my-5">
            <span className="text-xl font-bold">Quantity:</span>{" "}
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
              className="p-2 hover:shadow transition-all bg-gray-200 mx-2 rounded-full"
            >
              <HiMinusSm />
            </button>
            <span className="min-w-[20px] text-center">{counter}</span>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
              className="p-2 hover:shadow transition-all bg-gray-200 mx-2 rounded-full"
            >
              <HiPlusSm />
            </button>
          </div>
          <div className="add-to-cart flex">
            <button className=" flex items-center px-10 py-3 rounded-md bg-[#1B4B66] text-white transition-all mr-4">
              <FaShoppingCart className="mr-2"/>Add to Cart
            </button>
            <button className=" flex items-center px-10 py-3  rounded-md bg-[#1B4B66] text-white transition-all">
              <RiMoneyDollarCircleFill className="mr-2"/>Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
