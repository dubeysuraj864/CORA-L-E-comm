import { FaStar,FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function ItemCard(props) {
  return (
    <>
      <div className="item-card relative">
        <div className=" m-0 my-10 md:m-5 w-[180px] bg-white md:w-[250px] rounded-md  cursor-pointer">
          <div className="top">
            <img
              src={props.image}
              className="w-[150px] p-2 h-[150px] md:w-[250px] md:h-[250px] object-contain rounded-md"
              alt=""
            />
          </div>
          <div className="bottom p-1 py-2 md:p-2">
            <MdOutlineFavoriteBorder className=" bg-[#1B4B66] text-white w-6 h-6 p-1 rounded-full absolute top-2 md:top-1 right-2 md:right-6  text-xl cursor-pointer active:text-red-400" />
            <div className="title text-sm">{props.title}</div>
            <div className="type font-light text-sm my-0.5">
              {props.category}
            </div>
            <div className="stars flex items-center text-orange-400 my-0.5 ">
              <span className="flex mr-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-300" />
              </span>{" "}
              <span className="text-sm text-gray-600 opacity-90">
                {props.rating.count}
              </span>
            </div>
            <div className="price flex items-center">
              <div className="price-now mr-1">${props.price}</div>
              <div className="price-before text-sm flex ">
                $<del className="mr-2">69.49</del> <span className="text-red-500">50% OFF</span>
              </div>
            </div>
            <button className=" flex items-center px-2 py-2 my-2 rounded-md hover:bg-[#639599] bg-[#1B4B66] text-white transition-all mr-2 md:mr-4 text-sm">
              <FaShoppingCart className="mr-2 text-sm"/>Add to Cart
            </button>
      
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
