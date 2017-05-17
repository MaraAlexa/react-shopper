import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

let EmptyCart = () => (
  <div className="CartPage-empty">
    Your cart is empty.
    <br/>
    Why not add some expensive products to it?
  </div>
);

function CartPage({cartItems, onAddOne, onRemoveOne}) {
  return(
    cartItems.length === 0 ? <EmptyCart />
    :
    <ul className="itemPage-items">
      {
        cartItems.map((item) =>
          <li key={item.id} className="item-page-item">
            <Item item={item}>
              <div className="cartItem-control">
                <button className="cartItem-removeOne" onClick={onRemoveOne.bind(null, item)}>
                  &ndash;
                </button>
                <span className="cardItem-count">{item.count}</span>
                <button className="cartItem-addOne" onClick={onAddOne.bind(null, item)}>
                  +
                </button>
              </div>
            </Item>

          </li>
        )
      }

      <li className="total-price">Total Price: ${cartItems.reduce((sum, item) => sum + (item.price * item.count), 0)}</li>
      {
        cartItems.length > 0 ? <button className="buy">Buy</button> : ''
      }


    </ul>
  )
}

CartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
}

export default CartPage
