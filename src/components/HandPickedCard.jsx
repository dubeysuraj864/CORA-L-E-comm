import Handpickedwatch from "../images/handpickedwatch.png"

function HandPickedCard() {
    return ( <>
    <div className="Handpicked-card relative w-[250px] h-fit m-4 rounded-lg ">
        <img src={Handpickedwatch} className="rounded-lg w-[250px]" alt="" />
        <div className="absolute bottom-2 w-1/2 text-black left-2 bg-blur backdrop-blur-md">Wrist Watches</div>
    </div>
    </> );
}

export default HandPickedCard;