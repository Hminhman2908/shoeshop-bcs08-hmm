import React, { Component } from "react";
import { connect } from "react-redux";
import ItemShoe from "./ItemShoe";

class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.shoeArr.map((item, index) => {
      return <ItemShoe item={item} key={index} />;
    });
  };
  render() {
    return <div className="col-6 row">{this.renderListShoe()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps)(ListShoe);
