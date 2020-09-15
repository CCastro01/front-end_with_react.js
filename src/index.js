import React from 'react'
import { render } from 'react-dom'
import App from './App' 
import Body from './Body'

// JSX: HTML dentro do JavaScript (JavaScript XML)
render(
   <App/>, document.getElementById('app')
)

render(
   <Body/>, document.getElementById('body')
)

