import ItemCard from "./ItemCard";
import { useContext } from "react";
import { AppProvider } from "../App";
import { Link } from "react-router-dom";
function ProductLists() {
  const { item } = useContext(AppProvider);
  console.log(item);
  return (
    <>
      {item.map((x, key) => {
        return (
          <div className="product-lists m-1 md:m-5 flex flex-wrap  ">
            <Link to="/product">
              <ItemCard
                key={x.id}
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
    </>
  );
}

export default ProductLists;
