import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
  render() {
    let { image } = this.props.detail;
    return (
      <div className="container text-center">
        <img src={image} alt="" />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    detail: state.shoeReducer.detail,
  };
};
export default connect(mapStateToProps)(DetailShoe);
