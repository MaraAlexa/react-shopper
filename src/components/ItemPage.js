import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

function ItemPage({items, onAddToCart}) {
  return(
    <ul className="itemPage-items">
      {
        items.map((item) => <Item key={item.id} item={item} onAddToCart={onAddToCart.bind(null, item)}/>)
      }
    </ul>
  )

}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemPage
