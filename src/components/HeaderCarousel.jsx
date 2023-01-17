function HeaderCarousel(props) {
  return (
    <>
      <div className="HeaderCarousel flex  justify-start will-change-scroll overflow-x-scroll scrollbar-hide snap-mandatory m-4 w-fit rounded-3xl">
        {" "}
        <img
          src={props.image}
          className="w-[100vw] md:h-[400px] h-[200px] object-cover mx-2 md:mx-4 rounded-lg"
          alt=""
        />
              <img
          src={props.image}
          className="w-[100vw] md:h-[400px] h-[200px] object-cover mx-2 md:mx-4 rounded-lg"
          alt=""
        />
              <img
          src={props.image}
          className="w-[100vw] md:h-[400px] h-[200px] object-cover mx-2 md:mx-4 rounded-lg"
          alt=""
        />
              <img
          src={props.image}
          className="w-[100vw] md:h-[400px] h-[200px] object-cover mx-2 md:mx-4 rounded-lg"
          alt=""
        />
              <img
          src={props.image}
          className="w-[100vw] md:h-[400px] h-[200px] object-cover mx-2 md:mx-4 rounded-lg"
          alt=""
        />
      </div>
    </>
  );
}

export default HeaderCarousel;
