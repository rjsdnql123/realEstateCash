import { connect } from "react-redux";
// import axios from "axios";
import Logo from "../Logo";
import { setClickMap } from "../modules/action";

const mapStateToProps = (state: any) => {
  return { clickMap: state.Reducer.clickMap };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setClickMap: (diff: any) => dispatch(setClickMap(diff)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
