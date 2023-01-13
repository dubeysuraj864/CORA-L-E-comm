
import Hero from "../images/hero.png";
function HeaderCarousel() {
  return (
    <>
      <div className="HeaderCarousel flex overflow-x-scroll scrollbar-hide snap-mandatory m-4">
        {" "}

          <img src={Hero} className="w-[90%] mx-2 md:mx-4"  alt="" />
     
          <img src={Hero}  alt="" />
        </div>
    </>
  );
}

export default HeaderCarousel;
