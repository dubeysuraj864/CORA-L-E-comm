import HeaderCarousel from "../components/HeaderCarousel";
import CategoryHero from "../images/categoryhero.png";
import Filter from "../components/Filter";
import ProductLists from "../components/ProductLists";
function CategoryPage() {
  return (
    <>
      <div className="category-page">
        <div>
          <HeaderCarousel image={CategoryHero} />
        </div>
        <div className="flex justify-center items-start my-10">
            <div className="left-filter">
                <Filter/>
            </div>
            <div className="right-items flex justify-center items-start">
                <ProductLists/>
            </div>
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
