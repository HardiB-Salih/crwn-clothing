import React from "react";
import styled from "styled-components";
import CategoryItem from "../category-item/category-item.components";

const Directory = ({ categories }) => {
  return (
    <DirectoriesContainer>
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </DirectoriesContainer>
  );
};
export default Directory;

const DirectoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
