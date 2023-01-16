import ItemCard from "./ItemCard";
import { useContext } from "react";
import { AppProvider } from "../App";
function ProductLists() {
  const { item } = useContext(AppProvider);
  console.log(item)
  return (
    <>
      {item.map((x,key) => {
        return (
          <div className="product-lists m-5 flex flex-wrap  ">
            <ItemCard key={key} image={x.image} title={x.title} price={x.price} rating={x.rating} category={x.category}/>
          </div>
        );
      })}
    </>
  );
}

export default ProductLists;
