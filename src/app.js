import sass from './styles/app.sass'


import React from 'react'
import ReactDOM from 'react-dom'
// import components
import Nav from './components/Nav'
import ItemPage from './components/ItemPage'
import CartPage from './components/CartPage'

// data
import {items} from './data/shopperData'


class App extends React.Component {
  constructor(props){
    super(props)

    // initial state
    this.state = {
      selectedTabFlag: 0,
      cart: []
    }
  }
  // change tab state
  changeSelectedTab = (index, e) => {
    e.preventDefault()
    this.setState({
      selectedTabFlag: index
    })
  }
 // change cart state
  handleAddToCart = (item) => {
    this.setState({
      // adds new item ID in the cart state
      cart: [...this.state.cart, item.id]
    })
  }

  renderCart = () => {
    // count how many of each item in cart
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId] ++ ;
      return itemCounts;
    }, {}); // {id0: 2, id1: 1, id2: 1 ... }

    // create an array of items
    let keys = Object.keys(itemCounts); // ['id0', 'id1', ...]

    let cartItems = keys.map(itemId => {
      // find item by ID
      var item = items.find(item => item.id === parseInt(itemId, 10));
      // create new item that also has count prop
      return {
        ...item, // take a copy of the item matched
        count: itemCounts[itemId] // add also a count property to it -> count: 2
      }
    })

    return cartItems; // from renderCart func

  }

  handleRemoveOne = (item) => {
    let { cart } = this.state;
    let idx = cart.indexOf(item.id);
    this.setState({
      cart: [
        ...cart.slice(0, idx),
        ...cart.slice(idx + 1)
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <Nav  numberOfItems={this.state.cart.length}
              onTabChange={this.changeSelectedTab}
              flag={this.state.selectedTabFlag}
              cartItems={this.renderCart()}

        />
        <main className='app-content'>
          {this.state.selectedTabFlag === 0 ?
            <ItemPage
              items={items}
              onAddToCart={this.handleAddToCart}/>
              :
            <CartPage
              cartItems={this.renderCart()}
              onAddOne={this.handleAddToCart}
              onRemoveOne={this.handleRemoveOne}
            />
          }

        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
