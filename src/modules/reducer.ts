import { CLICK_MAP, LOCATION_NUMBER } from "./action";

type RealestateState = {
  clickMap: string;
  locationNumber: string;
};

const initialState: RealestateState = {
  clickMap: "asdf",
  locationNumber: "fff",
};

function Reducer(state: RealestateState = initialState, action: any) {
  switch (action.type) {
    case CLICK_MAP:
      return Object.assign({}, state, {
        clickMap: action.clickMap,
      });
    case LOCATION_NUMBER:
      return Object.assign({}, state, {
        locationNumber: action.locationNumber,
      });
    default:
      return state;
  }
}

export default Reducer;
