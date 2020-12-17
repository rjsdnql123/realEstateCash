import { CLICK_MAP, RESULT_LIST } from "./action";
import { ReducerType, ActionType } from "./type";

const initialState: ReducerType = {
  clickMap: "지역을 클릭하세요",
  resultList: [],
};

function Reducer(state: ReducerType = initialState, action: ActionType) {
  console.log(action, "action");
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
