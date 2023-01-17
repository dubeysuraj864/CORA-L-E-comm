import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import Description from "../components/Description";
function ProductPage(props) {
  const [counter, setCounter] = useState(0);
  const [image, setImage] = useState(
    "https://m.media-amazon.com/images/I/91v9yAPw3-L._SL1500_.jpg"
  );
  
  return (
    <>
      <div className="product-page md-2 md:m-10 flex flex-col md:flex-row justify-center item-start">
        <div className="left flex md:flex-row flex-col-reverse justify-center m-6 md:mx-6">
          <div className="multiple flex flex-row md:flex-col overflow-auto scrollbar-hide">
            <img
              onClick={() => {
                setImage(
                  "https://m.media-amazon.com/images/I/71lU6IcsUcL._SL1500_.jpg"
                );
              }}
              src="https://m.media-amazon.com/images/I/71lU6IcsUcL._SL1500_.jpg"
              className=" w-[100px] h-[100px] md:w-[100px] md:h-[100px] m-1 md:m-2 cursor-pointer"
              alt=""
            />
            <img
              onClick={() => {
                setImage(
                  "https://m.media-amazon.com/images/I/61eDXs9QFNL._SL1500_.jpg"
                );
              }}
              src="https://m.media-amazon.com/images/I/61eDXs9QFNL._SL1500_.jpg"
              className=" w-[100px] h-[100px] md:w-[100px] md:h-[100px] m-1 md:m-2 cursor-pointer"
              alt=""
            />
            <img
              onClick={() => {
                setImage(
                  "https://m.media-amazon.com/images/I/81W0CsQf-VL._SL1500_.jpg"
                );
              }}
              src="https://m.media-amazon.com/images/I/81W0CsQf-VL._SL1500_.jpg"
              className=" w-[100px] h-[100px] md:w-[100px] md:h-[100px] m-1 md:m-2 cursor-pointer"
              alt=""
            />
            <img
              onClick={() => {
                setImage(
                  "https://m.media-amazon.com/images/I/71dKjvLPkAL._SL1500_.jpg"
                );
              }}
              src="https://m.media-amazon.com/images/I/71dKjvLPkAL._SL1500_.jpg"
              className=" w-[100px] h-[100px] md:w-[100px] md:h-[100px]  m-1 md:m-2 cursor-pointer"
              alt=""
            />
          </div>
          <div className="single-image">
            <img
              src={image}
              className=" w-[340px] md:w-[420px] md:h-[420px] mx-2"
              alt=""
            />
          </div>
        </div>

        <div className="right mx-10 md:m-5">
          <div className="title text-4xl font-bold">Apple Watch Ultra</div>
          <div className="category my-2 text-gray-500 max-w-[500px]">
            [GPS + Cellular 49 mm] smart watch w/Rugged Titanium Case &
            Starlight Alpine Loop Large Fitness Tracker, Precision GPS, Action
            Button, Extra-Long BatteryLife, Brighter Retina Display
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
          <div className="pin-code flex flex-col md:flex-row md:items-center my-3">
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
                (counter > 0) ? setCounter(counter - 1) : setCounter(counter - 0)
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
          <div className="add-to-cart flex mb-10">
            <button className=" flex items-center px-7 md:px-10 py-3 rounded-md bg-[#1B4B66] text-white transition-all mr-2 md:mr-4">
              <FaShoppingCart className="mr-2 text-2xl" />
              Add to Cart
            </button>
            <button className=" flex items-center  px-7 md:px-10 py-3  rounded-md bg-[#1B4B66] text-white transition-all">
              <RiMoneyDollarCircleFill className="mr-2 text-2xl" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Description />
      </div>
    </>
  );
}

export default ProductPage;
