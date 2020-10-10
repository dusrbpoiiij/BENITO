import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// screen 
import Header from './screens/header/Header';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
