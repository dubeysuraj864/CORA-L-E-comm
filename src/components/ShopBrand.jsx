import BrandIcon from "./BrandIcon";

function ShopBrand() {
    return ( <>
      <div className="new-arrival my-10 p-5 ">
        <div className="ml-6 text-4xl font-bold">Shop by Brands</div>
        <div className="flex overflow-auto scrollbar-hide">
      <div>
      <BrandIcon/>
      </div>
      <div>
      <BrandIcon/>
      </div>
      <div>
      <BrandIcon/>
      </div>
      <div>
      <BrandIcon/>
      </div>
      <div>
      <BrandIcon/>
      </div>
      <div>
      <BrandIcon/>
      </div>
      <div>
      <BrandIcon/>
      </div>
      <div>
      <BrandIcon/>
      </div>
      
        </div>
      </div>
    </> );
}

export default ShopBrand;