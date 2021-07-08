import React, { Component } from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { items } from '../shared/items';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: items,
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/menu" render={() => <Menu items={this.state.items} />} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;
