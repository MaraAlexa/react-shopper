import sass from './styles/app.sass'


import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(props){
    super(props)

    // initial state
    this.state = {
      selectedTab: 0
    }
  }
  // change state
  selectedTab = (index, e) => {
    e.preventDefault()
    this.setState({
      selectedTab: index
    })
  }

  render() {
    return (
      <div className='App'>
        <nav className="app-nav">
          <ul>
            <li className="app-nav-item">
              <a href="" onClick={this.selectedTab.bind(this, 0)}>Items</a>
            </li>
            <li className="app-nav-item">
              <a href="" onClick={this.selectedTab.bind(this, 1)}>Shopping Cart</a>
            </li>
          </ul>
        </nav>
        <main className='app-content'>
          {this.state.selectedTab == 0 ? <p>items content</p> :  <p>cart content</p> }
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
