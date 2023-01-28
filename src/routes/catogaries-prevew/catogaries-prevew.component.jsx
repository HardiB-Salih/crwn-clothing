import { useContext } from "react";
import styled from "styled-components";
import CatogaryPriview from "../../components/category-item/catogary-priview.component";
import { CatogariesContext } from "../../contexts/products.contex";

const CatogariesPrevew = () => {
  const { catogariesMap } = useContext(CatogariesContext);
  return (
    <Wrapper>
      {Object.keys(catogariesMap).map((title) => {
        const products = catogariesMap[title];
        return (
          <CatogaryPriview key={title} title={title} products={products} />
        );
      })}
    </Wrapper>
  );
};

export default CatogariesPrevew;
const Wrapper = styled.div`
  padding: 0px 30px 40px;

  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 50px; */
`;
