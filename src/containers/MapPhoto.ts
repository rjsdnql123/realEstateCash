import { connect } from "react-redux";
// import axios from "axios";
import MapPhoto from "../components/MapPhoto";
import { setClickMap, setResultList } from "../modules/action";
import { mapStateToPropsType, ResultListType } from "../modules/type";

const mapStateToProps = ({ Reducer: { clickMap } }: mapStateToPropsType) => {
  return { clickMap: clickMap };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    //지역 명
    setClickMap: (diff: string) => dispatch(setClickMap(diff)),
    //결과 배열
    setResultList: (diff: ResultListType[]) => dispatch(setResultList(diff)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPhoto);
