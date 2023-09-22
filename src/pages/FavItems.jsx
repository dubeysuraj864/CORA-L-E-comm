import FavItem from "../components/FavItem";
import { useContext } from "react";
import { AppProvider } from "../App";
import { Link, useLocation } from "react-router-dom";

function FavItems(props) {
  const { item } = useContext(AppProvider);
  console.log(item);
  const location = useLocation();
  return (
    <>
      <div>
        <div className="category w-fit p-2 rounded-lg bg-white ml-14 m-4">
          <Link to="/">Home</Link> {location.pathname}
        </div>
        <div className="fav-items relative product-lists m-1 md:m-5 flex justify-center flex-wrap">
          {item.map((x, key) => {
            return (
              <div className="relative product-lists flex items-center">
                <div>
                  <FavItem
                    key={x.id}
                    image={x.image}
                    title={x.title}
                    price={x.price}
                    rating={x.rating}
                    category={x.category}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FavItems;
