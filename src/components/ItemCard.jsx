import PinkBage from "../images/pinkbag.png";
import {FaStar} from "react-icons/fa";
import {MdOutlineFavoriteBorder} from "react-icons/md";
function ItemCard() {
  return (
    <>
      <div className="item-card ">
      <div className=" m-2 my-10 md:m-5 bg-white w-[250px] rounded-md  cursor-pointer">
        <div className="top">
            <img src={PinkBage} className="w-[250px] rounded-md" alt="" />
        </div>
        <div className="bottom p-2 relative">
<MdOutlineFavoriteBorder  className=" absolute right-2  text-xl cursor-pointer active:text-red-400"/>
            <div className="title text-md">Grande</div>
            <div className="type font-light text-sm my-0.5">Blossom Pouch</div>
            <div className="stars flex items-center text-orange-400 my-0.5 "><span className="flex mr-1"><FaStar/><FaStar/><FaStar/><FaStar /><FaStar className="text-gray-300" /></span> <span className="text-sm text-gray-600 opacity-90">43 Ratings</span></div>
            <div className="price flex items-center">
                <div className="price-now mr-1">$38.49</div>
                <div className="price-before text-sm ">$<del>69.49</del> <span className="text-red-500">50% OFF</span></div>
            </div>
        </div>
    </div>
      </div>
    </>
  );
}

export default ItemCard;
