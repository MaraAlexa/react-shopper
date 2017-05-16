import React from 'react'
import PropTypes from 'prop-types'

class Nav extends React.Component {
  render(){
    return(
      <nav className="app-nav">
        <ul>
          <li className={`app-nav-item ${this.props.flag === 0 && 'selected'}`}>
            <a href="" onClick={this.props.onTabChange.bind(this, 0)}>Items</a>
          </li>

          <li className={`app-nav-item ${this.props.flag !== 0 && 'selected'}`}>
            <a href="" onClick={this.props.onTabChange.bind(this, 1)}>Shopping Cart</a>
            <span className={`shopping-items-length ${this.props.numberOfItems === 0 ? 'hide' : ''}`}>{this.props.numberOfItems}</span>
          </li>

          <li className="cartItems-icon">
            <a href="" onClick={this.props.onTabChange.bind(this, 1)}>
                {`${this.props.numberOfItems} ${'items $'}${this.props.cartItems.reduce((sum, item) => sum + (item.price * item.count), 0)}`}
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

Nav.propTypes = {
  flag: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired
}

export default Nav
