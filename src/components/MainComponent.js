import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Cart from './CartComponent';
import { items } from '../shared/items';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import Order from './OrderComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: items,
        };
    }

    render() {
        const Ordercategory = props => {
            return <Order items={this.state.items.filter(item => item.category === props.match.params.category)} />;
        };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/cart" component={Cart} />
                    <Route path="/home" component={Home} />
                    <Route path="/menu" render={() => <Menu items={this.state.items} />} />
                    <Route exact path="/order" render={() => <Order items={this.state.items} />} />
                    <Route path="/about" component={About} />
                    <Route path="/:category" component={Ordercategory} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;
