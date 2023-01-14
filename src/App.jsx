import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
// import HandBags from "./pages/HandBags.jsx";
// import Watches from "./pages/Watches.jsx";
// import Jewellery from "./pages/Jewellery.jsx";
// import SkinCare from "./pages/SkinCare.jsx";
// import Apparels from "./pages/Apparels.jsx";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <div className="App overflow-hidden bg-gray-50">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar className="z-30" />}>
              <Route
                index
                element={
                  <Suspense fallback={<Loader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route path="/handbags" element={<CategoryPage />} />
              <Route path="/jewellery" element={<CategoryPage />} />
              <Route path="/skincare" element={<CategoryPage />} />
              <Route path="/watches" element={<CategoryPage />} />
              <Route path="/apparels" element={<CategoryPage />} />
              {/* <Route path="/handbags" element={<HandBags />} />
              <Route path="/jewellery" element={<Jewellery />} />
              <Route path="/skincare" element={<SkinCare />} />
              <Route path="/watches" element={<Watches />} />
              <Route path="/apparels" element={<Apparels />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
