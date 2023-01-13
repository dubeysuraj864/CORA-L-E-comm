import HandPickedCard from "./HandPickedCard";

function HandpickedCollections() {
  return (
    <>
      <div className="new-arrival my-10 py-10 md:p-5 bg-[#1B4B66] text-white">
        <div className="ml-6 text-3xl font-bold">Handpicked Collections </div>
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
