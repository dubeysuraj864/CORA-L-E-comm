import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
function Filter(props) {
  return (
    <>
      <div className="filter md:m-10 pl-10 flex flex-col w-full">
        <div className="category flex items-center  bg-white p-2 rounded-lg">
          <Link to="/">Home</Link> {props.page}
        </div>
        <div className="category-name text-2xl font-medium my-2">Handbags</div>
        <div className="flex justify-between items-center">
          <div>Size</div>
          <div>
            <HiPlusSm />
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center my-2">
          <div>Color</div>
          <div>
            <HiMinusSm />
          </div>
        </div>
        <hr />
        <div className="flex flex-col my-5">
          <span className="my-1">
            {" "}
            <input type="checkbox" name="blue" id="blue" /> Blue
          </span>
          <span className="my-1">
            {" "}
            <input type="checkbox" name="Maroon_red" id="Maroon_red" /> Maroon
            Red
          </span>
          <span className="my-1">
            {" "}
            <input type="checkbox" name="Crimson_red" id="Crimson_red" />{" "}
            Crimson Red
          </span>
          <span className="my-1">
            {" "}
            <input type="checkbox" name="Seinna_pink" id="Seinna_pink" /> Seinna
            Pink
          </span>
          <span className="my-1">
            {" "}
            <input type="checkbox" name="Teal" id="Teal" /> Teal
          </span>
          <span className="my-1">
            {" "}
            <input type="checkbox" name="Aquamarine" id="Aquamarine" />{" "}
            Aquamarine
          </span>
          <span className="my-1">
            {" "}
            <input type="checkbox" name="Off-White" id="Off-White" /> Off-White
          </span>
          <span className="my-1">
            {" "}
            <input type="checkbox" name="Muave Orange" id="Muave Orange" />{" "}
            Muave Orange
          </span>
        </div>
        <div className="flex justify-between items-center my-2">
          <div>Brand</div>
          <div>
            <HiPlusSm />
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center my-2">
          <div>Price Range</div>
          <div>
            <HiPlusSm />
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center my-2">
          <div>Discount</div>
          <div>
            <HiPlusSm />
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center my-2">
          <div>Availability</div>
          <div>
            <HiPlusSm />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Filter;
