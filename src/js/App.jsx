import React from 'react';

import app_style from '../sass/app.scss'

export default class App extends React.Component {

    render(){
        return(
            <div className={app_style.mydiv}>
                ReactJS 16 + Webpack 3 Boilerplate<br/>
                v{ VERSION }<br/>
            </div>
        )
    }
}
