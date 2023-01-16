import BrandIcon from "./BrandIcon";

function ShopBrand() {
  return (
    <>
      <div className="new-arrival my-10 md:p-5 p-0 py-10 ">
        <div className="ml-6 text-4xl font-bold">Shop by Brands</div>
        <div className="flex overflow-auto scrollbar-hide md:py-5">
          <div>
            <BrandIcon />
          </div>
          <div>
            <BrandIcon />
          </div>
          <div>
            <BrandIcon />
          </div>
          <div>
            <BrandIcon />
          </div>
          <div>
            <BrandIcon />
          </div>
          <div>
            <BrandIcon />
          </div>
          <div>
            <BrandIcon />
          </div>
          <div>
            <BrandIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopBrand;
