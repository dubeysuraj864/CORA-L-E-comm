import ArrivalCard from "./ArrivalCard";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function NewArrival() {
  return (
    <>
      <div className="new-arrival my-10 m-0 px-0 ">
        <div className="ml-6 text-4xl font-bold flex justify-between items-center">
          <div className="">New Arrival</div>
          <div className="">
            <Link className="flex items-center text-sm">
              View All <HiChevronRight className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex overflow-auto scrollbar-hide md:px-5">
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
