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
    const [products, setProducts] = useState(PRODUCTS);

    const onAdd = (id, quantity) => {
        const newProducts = products.map(item => {
            if (item.id === id) {
                return { ...item, quantity: products.filter(item => item.id === id)[0].quantity + quantity };
            } else return item;
        });
        setProducts(newProducts);
    };

    return (
        <div>
            <Header badge={products.reduce((total, item) => item.quantity + total, 0)} />
            <main>
                <Switch>
                    <Route path="/cart" render={() => <Cart items={products.filter(item => item.quantity > 0)} onAdd={(id, quantity) => onAdd(id, quantity)} />} />
                    <Route exact path="/" component={Home} />
                    <Route path="/menu" render={() => <Menu products={products} />} />
                    <Route exact path="/order" render={() => <Order onAdd={(id, quantity) => onAdd(id, quantity)} />} />
                    <Route path="/order/:category" render={props => <Order onAdd={(id, quantity) => onAdd(id, quantity)} category={props.match.params.category} />} />
                    <Route path="/about" component={About} />
                    <Redirect to="/" />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}
export default Main;
