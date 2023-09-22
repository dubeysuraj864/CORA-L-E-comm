import HeaderCarousel from "../components/HeaderCarousel";
import CategoryHero from "../images/categoryhero.png";
import Filter from "../components/Filter";
import ProductLists from "../components/ProductLists";
import { useLocation } from "react-router-dom";
function CategoryPage() {
  const location = useLocation();
  return (
    <>
      <div className="category-page">
        <div>
          <HeaderCarousel image={CategoryHero} />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start my-10">
          <div className="left-filter">
            <Filter page={location.pathname} />
          </div>
          <div className="right-items flex flex-wrap justify-center items-start">
            <ProductLists />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
