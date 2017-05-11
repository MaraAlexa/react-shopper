import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

function CartPage({items, onAddOne, onRemoveOne}) {
  return(
    <ul className="itemPage-items">
      {
        items.map((item) =>
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
    </ul>
  )
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
}

export default CartPage
