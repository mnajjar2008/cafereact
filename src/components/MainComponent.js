import React, { Component } from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {items} from "../shared/items"
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';

class Main extends Component {
constructor(props) {
  super(props)

  this.state = {
     items:items
  }
}


    render() {
        return (
            <div>
                <Header />
                <div>{this.state.items.map(item=>item.name)} </div>
                <About />
                <Menu items={this.state.items} />
                <Footer />
            </div>
        );
    }
}
export default Main;
