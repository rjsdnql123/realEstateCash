import { connect } from "react-redux";
import ListBox from "../components/ListBox";
import { mapStateToPropsType } from "../modules/type";

const mapStateToProps = ({ Reducer: { resultList } }: mapStateToPropsType) => {
  console.log(resultList);
  return {
    resultList: resultList,
  };
};

export default connect(mapStateToProps)(ListBox);
