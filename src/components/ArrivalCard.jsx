function ArrivalCard(props) {
  return (
    <div className="">
      <div className="arrival-card mx-2 my-10 md:my-20  bg-white w-[250px] rounded-md ">
        <div className="top">
          <img
            src={props.image}
            className="w-[250px] h-[250px] p-2 object-contain rounded-md"
            alt=""
          />
        </div>
        <div className="bottom p-2">
          <div className="title text-xl title text-ellipsis inline-block whitespace-no-wrap overflow-hidden w-[240px] truncate">
            {props.title}
          </div>
          <div className="type font-light my-1">{props.category}</div>
          <div className="price">${props.price}</div>
        </div>
      </div>
    </div>
  );
}

export default ArrivalCard;
