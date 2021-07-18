import React, { useState } from 'react';
import Header from './common/HeaderComponent';
import Footer from './common/FooterComponent';
import Home from './HomeComponent';
import Cart from './cart/CartComponent';
import About from './about/AboutComponent';
import Menu from './menu/MenuComponent';
import Order from './order/OrderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PRODUCTS } from '../lib/data/products';

function Main() {
    const [products, setproducts] = useState(PRODUCTS);

    return (
        <div>
            <Header />
            <main>
                <Switch>
                    <Route path="/cart" component={Cart} />
                    <Route path="/home" component={Home} />
                    <Route path="/menu" render={() => <Menu products={products} />} />
                    <Route exact path="/order" render={() => <Order products={products} />} />
                    <Route path="/order/:category" render={props => <Order products={products} paramsVal={props.match.params.category} />} />
                    <Route path="/about" component={About} />
                    <Redirect to="/home" />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}
export default Main;
