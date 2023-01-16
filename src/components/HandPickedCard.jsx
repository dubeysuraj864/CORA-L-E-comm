import Handpickedwatch from "../images/handpickedwatch.png"

function HandPickedCard(props) {
    return ( <>
    <div className="Handpicked-card relative w-[250px] h-fit m-4 rounded-lg ">
        <img src={props.image} className="rounded-lg w-[250px] h-[250px] bg-white object-contain" alt="" />
        <div className="absolute bottom-2 w-1/2 text-black left-2 bg-blur backdrop-blur-md text-center rounded-xl">{
props.category}</div>
    </div>
    </> );
}

export default HandPickedCard;