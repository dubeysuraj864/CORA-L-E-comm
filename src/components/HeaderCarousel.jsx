
import Hero from "../images/hero.png";
function HeaderCarousel() {
  return (
    <>
      <div className="HeaderCarousel flex overflow-x-scroll scrollbar-hide snap-mandatory m-4">
        {" "}

          <img src={Hero}  alt="" />
     
          <img src={Hero}  alt="" />
        </div>
    </>
  );
}

export default HeaderCarousel;
