import { connect } from "react-redux";
import ListBox from "../components/ListBox";

const mapStateToProps = (state: any) => {
  return {
    resultList: state.Reducer.resultList,
  };
};

export default connect(mapStateToProps)(ListBox);
