import { createContext, useEffect, useState } from "react";
import { getCatogeriesAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CatogariesContext = createContext({
  catogariesMap: {},
});

export const CatogariesProvider = ({ children }) => {
  const [catogariesMap, setCatogariesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocuments("catogaries", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCatogaryMap = async () => {
      const catogaryMap = await getCatogeriesAndDocuments();
      setCatogariesMap(catogaryMap);
    };
    getCatogaryMap();
  }, []);

  const value = { catogariesMap };

  return (
    <CatogariesContext.Provider value={value}>
      {children}
    </CatogariesContext.Provider>
  );
};
