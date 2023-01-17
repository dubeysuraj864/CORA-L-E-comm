import { useContext } from "react";
import HandPickedCard from "./HandPickedCard";
import { AppProvider } from "../App";
import { Link } from "react-router-dom";
function HandpickedCollections() {
  const { item } = useContext(AppProvider);
  return (
    <>
      <div className="new-arrival my-10 py-10 md:p-5 bg-[#1B4B66] text-white">
        <div className="ml-6 text-3xl font-bold">Handpicked Collections </div>
        <div className="flex overflow-auto scrollbar-hide py-5">
          {item.map((x, key) => {
            return (
              <div>
                 <Link to="/product">
                 <HandPickedCard
                  key={key}
                  image={x.image}
                  title={x.title}
                  price={x.price}
                  rating={x.rating}
                  category={x.category}
                />
                 </Link>
             
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HandpickedCollections;
