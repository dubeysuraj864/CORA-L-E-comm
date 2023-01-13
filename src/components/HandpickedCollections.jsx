import HandPickedCard from "./HandPickedCard";

function HandpickedCollections() {
  return (
    <>
      <div className="new-arrival my-10 p-5 bg-[#1B4B66] text-white">
        <div className="ml-6 text-4xl font-bold">New Arrival</div>
        <div className="flex overflow-auto scrollbar-hide">
          <div>
            <HandPickedCard />
          </div>
          <div>
            <HandPickedCard />
          </div>
          <div>
            <HandPickedCard />
          </div>

          <div>
            <HandPickedCard />
          </div>
          <div>
            <HandPickedCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default HandpickedCollections;
