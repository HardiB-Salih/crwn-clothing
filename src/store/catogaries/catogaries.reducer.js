import { CATOGARIES_ACTION_TYPE } from "./catogaries.type";

const CATOGARIES_INITIAL_STATE = {
  catogariesArray: [],
  isLoading: false,
  error: null,
};

export const catogariesReducer = (
  state = CATOGARIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATOGARIES_ACTION_TYPE.FETCH_CATOGARIES_START:
      return {
        ...state,
        isLoading: true,
      };

    case CATOGARIES_ACTION_TYPE.FETCH_CATOGARIES_SUCCESS:
      return {
        ...state,
        catogariesArray: payload,
        isLoading: false,
      };
    case CATOGARIES_ACTION_TYPE.FETCH_CATOGARIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
