import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../../components/cards/product-card.compoent";
import { CatogariesContext } from "../../contexts/products.contex";

const Catogary = () => {
  const { catogary } = useParams();
  const { catogariesMap } = useContext(CatogariesContext);
  const [products, setProducts] = useState(catogariesMap[catogary]);

  useEffect(() => {
    setProducts(catogariesMap[catogary]);
  }, [catogary, catogariesMap]);

  return (
    <Fragment>
      <H2>{catogary}</H2>
      <Wrapper>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Wrapper>
    </Fragment>
  );
};

export default Catogary;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 0px 30px 50px;
`;

const H2 = styled.h2`
  text-transform: capitalize;
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
  cursor: pointer;
`;
