import { connect } from "react-redux";
import Headers from "../components/Headers";

const mapStateToProps = (state: any) => {
  return { clickMap: state.Reducer.clickMap };
};

export default connect(mapStateToProps)(Headers);
