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
          <HeaderCarousel image="https://static.vecteezy.com/system/resources/previews/002/006/774/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" />
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
