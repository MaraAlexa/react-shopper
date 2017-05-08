const sass = require('./app.sass');


import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  render() {
    return (
      <div>
        <p>My app</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
