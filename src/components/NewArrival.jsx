import { useContext } from "react";
import { AppProvider } from "../App";
import ArrivalCard from "./ArrivalCard";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function NewArrival() {
  // const { arrivalItem } = useContext(AppProvider);
  const { item } = useContext(AppProvider);
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
          {item.map((x, key) => {
            return (
              <>    <Link to="/product"> <ArrivalCard
              key={key}
              image={x.image}
              title={x.title}
              price={x.price}
              rating={x.rating}
              category={x.category}
            /></Link>
               
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewArrival;
