import ArrivalCard from "./ArrivalCard";

function NewArrival() {
  return (
    <>
      <div className="new-arrival my-10 mx-5 md:mx-5">
        <div className="ml-6 text-4xl font-bold">New Arrival</div>
        <div className="flex overflow-auto scrollbar-hide">
          <div>
            <ArrivalCard />
          </div>
          <div>
            <ArrivalCard />
          </div>
          <div>
            <ArrivalCard />
          </div>

          <div>
            <ArrivalCard />
          </div>
          <div>
            <ArrivalCard />
          </div>
          <div>
            <ArrivalCard />
          </div>
          <div>
            <ArrivalCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
