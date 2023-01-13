import Zara from "../images/Zara.png";
function BrandIcon() {
  return (
    <>
      <div className="brands-icon w-[150px] h-[150px] bg-white m-2 mt-5 md:m-6 rounded-md shadow-md flex justify-center items-center">
        <img src={Zara} className="w-[150px] h-[150px p-5" alt="" />
      </div>
    </>
  );
}

export default BrandIcon;
