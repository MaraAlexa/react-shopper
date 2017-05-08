import sass from './styles/app.sass'


import React from 'react'
import ReactDOM from 'react-dom'
// import components
import Nav from './components/Nav'
import ItemPage from './components/ItemPage'

// data
import {items} from './data/shopperData'


class App extends React.Component {
  constructor(props){
    super(props)

    // initial state
    this.state = {
      selectedTabFlag: 0, cart: 0
    }
  }
  // change state
  changeSelectedTab = (index, e) => {
    e.preventDefault()
    this.setState({
      selectedTabFlag: index
    })
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: this.state.cart += item.price
    })
  }

  render() {
    return (
      <div className='App'>
        <Nav onTabChange={this.changeSelectedTab} flag={this.state.selectedTabFlag}/>
        <main className='app-content'>
          {this.state.selectedTabFlag === 0 ? <ItemPage items={items} onAddToCart={this.handleAddToCart}/> :  <p>cart content</p> }
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
