import HandpickedCollections from "../components/HandpickedCollections";
import HeaderCarousel from "../components/HeaderCarousel";
import ImageBanner from "../components/ImageBanner";
import NewArrival from "../components/NewArrival";
import ShopBrand from "../components/ShopBrand";

function Home() {
  return (
    <>
      <div className="home">
        <div>
          <HeaderCarousel />
        </div>
        <div>
          <NewArrival />
        </div>
        <div>
          <HandpickedCollections />
        </div>
        <div>
          <ShopBrand />
        </div>
        <div>
          <ImageBanner />
        </div>
      </div>
    </>
  );
}

export default Home;
