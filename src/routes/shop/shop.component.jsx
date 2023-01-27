import { useContext } from "react";
import styled from "styled-components";
import ProductCard from "../../components/cards/product-card.compoent";
import { ProducsContext } from "../../contexts/products.contex";

const Shop = () => {
  const { products } = useContext(ProducsContext);
  return (
    <Wrapper>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

export default Shop;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 50px;
`;
