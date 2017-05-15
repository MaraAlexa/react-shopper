import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

function CartPage({cartItems, onAddOne, onRemoveOne}) {
  return(
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

            <b>Subtotal: {item.price * item.count}</b>
          </li>
        )
      }
      <li>Total Price: ${cartItems.reduce((sum, item) => sum + (item.price * item.count), 0)}</li>
    </ul>
  )
}

CartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
}

export default CartPage
