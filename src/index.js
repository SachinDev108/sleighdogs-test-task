
import Styles from './styles/landingPage.css'
import React from 'react'
import ReactDOM from 'react-dom';

import LandingPage from './components/LandingPage/index.jsx'

export default class App extends React.Component {
  render() {
    return(
      <LandingPage />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept()
  }
}
