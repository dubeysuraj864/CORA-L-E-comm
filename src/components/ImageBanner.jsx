import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import Banner3 from "../images/banner3.png";

function ImageBanner() {
    return ( <>
    <div className="image-banner flex flex-col items-center justify-center m-5 md:m-10">
        <div className="flex items-center justify-center "><img src={Banner1} className="m-4 w-[100%] rounded-2xl" alt="" /></div>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <img src={Banner2} className=" w-[100%] md:w-[48%] m-4" alt="" />
            <img src={Banner3} className=" w-[100%] md:w-[48%] m-4" alt="" />
        </div>
    </div>
    </> );
}

export default ImageBanner;