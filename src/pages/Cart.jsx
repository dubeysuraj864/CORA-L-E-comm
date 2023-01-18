function Cart() {
  return (
    <>
          <h1 className="text-[#1B4B66] text-center my-4  text-2xl font-bold bottom-border">My Cart</h1>
      <div className="cart m-6 p-4 flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-around ">
  
        <div className="left items-start">
          
          <table class="table-auto border-spacing-6 border-separate">
            <thead className="">
              <tr className="text-left">
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
              <hr />
            </thead>

            <tbody>
              <tr className="">
                <td className="flex">
                  <div class="cart-product-image">
                    {" "}
                    <img
                      src="https://m.media-amazon.com/images/I/71lU6IcsUcL._SL1500_.jpg"
                      className="w-20 rounded-lg mr-3"
                      alt=""
                    />
                  </div>
                  <div className="product-details">
                    <div>Apple Watch SE</div>
                    <div className="max-w-[240px] text-sm text-[#626262] ">
                      Watches [GPS] Water Resistance
                    </div>
                    <div className="text-sm text-[#626262]">Qty-1</div>
                  </div>
                </td>
                <td>$55.56</td>
                <td>1</td>
                <td>$65.55</td>
              </tr>
              <tr className="">
                <td className="flex">
                  <div class="cart-product-image">
                    {" "}
                    <img
                      src="https://m.media-amazon.com/images/I/91v9yAPw3-L._SL1500_.jpg"
                      className="w-20 rounded-lg mr-3"
                      alt=""
                    />
                  </div>
                  <div className="product-details">
                    <div>Apple Watch Ultra</div>
                    <div className="max-w-[240px] text-sm text-[#626262] ">
                      Watches [GPS] Water Resistance
                    </div>
                    <div className="text-sm text-[#626262]">Qty-1</div>
                  </div>
                </td>
                <td>$550.56</td>
                <td>1</td>
                <td>$650.55</td>
              </tr>
            </tbody>
          </table>

          
        </div>
        <div className="right order-summary">
            <table class="table-auto border-spacing-4 border-separate text-left ">
              <h1 className="text-lg pb-4 font-bold">Order Summary</h1>
              <hr />
              <tbody className="text-[#626262]">
                <tr>
                  <td >Sub Total</td>
                  <td>$716.1</td>
                </tr>
                <tr>
                  <td >Discount</td>
                  <td>-$33.40</td>
                </tr>
                <tr>
                  <td >Delivery Fee</td>
                  <td>-$0.00</td>
                </tr>
                <tr>
                  <td className="font-bold text-black" >Grand Total</td>
                  <td className="font-bold text-black">$106.29</td>
                </tr>
                <tr>
                  <td className="flex">
                    <button className=" flex items-center px-6 py-2 my-2 rounded-md hover:bg-[#639599] bg-[#1B4B66] text-white transition-all mr-2 md:mr-4 text-sm">
                      Place Order
                    </button>{" "}
                    <button className=" flex items-center px-6 py-2 my-2 rounded-md hover:bg-[#639599] bg-[#1B4B66] text-white transition-all mr-2 md:mr-4 text-sm">
                      Continue Shopping
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </>
  );
}

export default Cart;
