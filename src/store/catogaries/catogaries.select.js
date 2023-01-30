import { createSelector } from "reselect";

//We Use this to not rerunder the same thing over and over again is the state is the same.
const selectCatogaryReduce = (state) => state.catogaries;

export const selectCatogaries = createSelector(
  [selectCatogaryReduce],
  (catogariesSlice) => catogariesSlice.catogariesArray
);

export const selectCatogariesMap = createSelector(
  [selectCatogaries],
  (catogariesArray) =>
    catogariesArray.reduce((acc, catogary) => {
      const { title, items } = catogary;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCatogariesIsLoading = createSelector(
  [selectCatogaryReduce],
  (catogariesSlice) => catogariesSlice.isLoading
);
