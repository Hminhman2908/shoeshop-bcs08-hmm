import React, { Component } from "react";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./data";
import { connect } from "react-redux";
import { REMOVE_ITEM, UPDATE_QUANTITY } from "./constain/ShoeConstain";
class CartShoe extends Component {
  renderCart = () => {
    let { cart } = this.props;

    return cart.map((item, index) => {
      let { name, price, image, soLuong, id } = item;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <img width={100} src={image} alt="" />
          </td>
          <td>
            <div className="row">
              <button
                onClick={() => {
                  this.props.handleUpdateQuantity(id, GIAM_SO_LUONG);
                }}
                className="btn btn-dark"
              >
                -
              </button>
              <strong className="mx-3">{soLuong}</strong>
              <button
                onClick={() => {
                  this.props.handleUpdateQuantity(id, TANG_SO_LUONG);
                }}
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(this.props.item);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Pice</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderCart()}</tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return { cart: state.shoeReducer.cart };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateQuantity: (id, option) => {
      let action = {
        type: UPDATE_QUANTITY,
        payload: {
          id,
          option,
        },
      };
      dispatch(action);
    },
    handleRemove: (shoe) => {
      let action = {
        type: REMOVE_ITEM,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
