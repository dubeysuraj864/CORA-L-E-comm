import PinkBage from "../images/pinkbag.png"

function ArrivalCard() {
    return ( <>
    <div className="arrival-card m-5 bg-white w-[250px] rounded-md shadow-md">
        <div className="top">
            <img src={PinkBage} className="w-[250px] rounded-md" alt="" />
        </div>
        <div className="bottom p-2">
            <div className="title text-xl">Grande</div>
            <div className="type font-light my-1">Blossom Pouch</div>
            <div className="price">$38.49</div>
        </div>
    </div>
    </> );
}

export default ArrivalCard;