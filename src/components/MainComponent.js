import React, { Component } from 'react';
import Header from './common/HeaderComponent';
import Footer from './common/FooterComponent';
import Home from './HomeComponent';
import Cart from './cart/CartComponent';
import { PRODUCTS } from '../lib/data/products';
import About from './about/AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './menu/MenuComponent';
import Order from './order/OrderComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: PRODUCTS,
        };
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <Switch>
                        <Route path="/cart" component={Cart} />
                        <Route path="/home" component={Home} />
                        <Route path="/menu" render={() => <Menu products={this.state.products} />} />
                        <Route exact path="/order" render={() => <Order products={this.state.products} />} />
                        <Route path="/order/:category" render={props => <Order products={this.state.products} paramsVal={props.match.params.category} />} />
                        <Route path="/about" component={About} />
                        <Redirect to="/home" />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}
export default Main;
