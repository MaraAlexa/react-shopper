import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

function ItemPage({items, onAddToCart}) {
  return(
    <ul className="itemPage-items">
      {
        items.map((item) =>
          <li key={item.id} className="item-page-item">
            <Item item={item}
                  onAddToCart={onAddToCart.bind(null, item)}
            />
          </li>
        )
      }
    </ul>
  )
}





ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default ItemPage
