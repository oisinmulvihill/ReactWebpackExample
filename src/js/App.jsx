import React from 'react';

import appStyle from '../sass/app.scss'

export default class App extends React.Component {
  render () {
    return (
      <div className={appStyle.mydiv}>
          ReactJS + Webpack Boilerplate, Oisin v{ VERSION }
      </div>
    )
  }
}
