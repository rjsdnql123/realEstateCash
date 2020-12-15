import { connect } from "react-redux";
// import axios from "axios";
import MapPhoto from "../components/MapPhoto";
import { setClickMap, setResultList } from "../modules/action";

const mapStateToProps = (state: any) => {
  console.log(state, "state");
  return { clickMap: state.Reducer.clickMap };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    //지역 명
    setClickMap: (diff: any) => dispatch(setClickMap(diff)),
    //결과 배열
    setResultList: (diff: any) => dispatch(setResultList(diff)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPhoto);
