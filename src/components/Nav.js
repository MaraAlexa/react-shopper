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
