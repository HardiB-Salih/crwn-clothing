import { Routes, Route } from "react-router-dom";
import CatogariesPrevew from "../catogaries-prevew/catogaries-prevew.component";
import Catogary from "../catogary/catogary.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CatogariesPrevew />} />
      <Route path=":catogary" element={<Catogary />} />
    </Routes>
  );
};

export default Shop;
