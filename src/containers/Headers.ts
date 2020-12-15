import { connect } from "react-redux";
import Headers from "../components/Headers";
import { mapStateToPropsType } from "../modules/type";

const mapStateToProps = ({ Reducer: { clickMap } }: mapStateToPropsType) => {
  return { clickMap: clickMap };
};

export default connect(mapStateToProps)(Headers);
