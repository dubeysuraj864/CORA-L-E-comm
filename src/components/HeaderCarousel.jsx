

function HeaderCarousel(props) {
  return (
    <>
      <div className="HeaderCarousel flex  justify-center overflow-x-scroll scrollbar-hide snap-mandatory m-4">
        {" "}

          <img src={props.image} className="w-[95%] mx-2 md:mx-4"  alt="" />
        </div>
    </>
  );
}

export default HeaderCarousel;
