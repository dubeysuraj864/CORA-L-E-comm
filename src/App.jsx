import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect, useState, createContext } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
const Home = React.lazy(() => import("./pages/Home"));

export const AppProvider = createContext();

function App() {
  const [products, setProducts] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    let result = await response.json();
    setProducts(result);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <AppProvider.Provider value={{ item: products }}>
        <div className="App overflow-hidden bg-gray-100 transition-all">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar className="z-30" />}>
                <Route
                  index
                  element={
                    <Suspense fallback={<Loader />}>
                      <Home products={products} />
                    </Suspense>
                  }
                />
                <Route
                  path="/product/:id"
                  element={<ProductPage data={products} />}
                />
                <Route
                  path="/handbags"
                  products={products}
                  element={<CategoryPage />}
                />
                {/* <Route
                  path="/jewellery"
                  products={products}
                  element={<CategoryPage />}
                />
                <Route
                  path="/skincare"
                  products={products}
                  element={<CategoryPage />}
                />
                <Route
                  path="/watches"
                  products={products}
                  element={<CategoryPage />}
                />
                <Route
                  path="/apparels"
                  products={products}
                  element={<CategoryPage />}
                />
                <Route
                  path="/fav_items"
                  products={products}
                  element={<FavItems />}
                />
                <Route
                  path="/profile"
                  products={products}
                  element={<Profile />}
                /> */}
                <Route path="/cart" products={products} element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </AppProvider.Provider>
    </>
  );
}

export default App;
