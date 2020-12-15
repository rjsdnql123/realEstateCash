import { CLICK_MAP, RESULT_LIST } from "./action";
import { ReducerType, ActionType } from "./type";

const initialState: ReducerType = {
  clickMap: "부동산 실 거래 real estate",
  resultList: [],
};

function Reducer(state: ReducerType = initialState, action: ActionType) {
  switch (action.type) {
    case CLICK_MAP:
      return Object.assign({}, state, {
        clickMap: action.clickMap,
      });
    case RESULT_LIST:
      return Object.assign({}, state, {
        resultList: action.resultList,
      });
    default:
      return state;
  }
}

export default Reducer;
