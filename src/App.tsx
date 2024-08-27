import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import Home from "./Pages/Home/Home";
import { routes } from "./routes/routes";
import Layout from "./Pages/Layout/Layout";
import Products from "./Pages/Products/Products";
import Pricing from "./Pages/Pricing/Pricing";
import Company from "./Pages/Company/Company";
import Resources from "./Pages/Resources/Resources";
import Contact from "./Pages/Contact/Contact";
function App() {
  const [loading, setloading] = useState(false);
  const [color] = useState("#004050");
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000); // simulate loading time
  }, []);
  return (
    <>
      {(loading && (
        <div className="sweet-loading flex items-center justify-center w-screen h-screen bg-[#F4F4F4]">
          <BarLoader color={color} loading={loading} aria-label="Bar Spinner" />
        </div>
      )) || (
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.default} element={<Home />}></Route>
            <Route path={routes.products} element={<Products />}></Route>
            <Route path={routes.pricing} element={<Pricing />}></Route>
            <Route path={routes.company} element={<Company />}></Route>
            <Route path={routes.resources} element={<Resources />}></Route>
            <Route path={routes.contact} element={<Contact />}></Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
