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
    const [cart, setCart] = useState([
        { id: 0, name: 'Muffin', price: 1.99, quantity: 0 },
        { id: 1, name: 'Scone', price: 2.99, quantity: 0 },
        { id: 2, name: 'Cookie', price: 0.75, quantity: 0 },
        { id: 3, name: 'Brownie', price: 1.99, quantity: 0 },
        { id: 4, name: 'GF Cookie', price: 1.99, quantity: 0 },
        { id: 5, name: 'Protein Puck', price: 1.99, quantity: 0 },
        { id: 6, name: 'Vegan + Gluten Free Waffle', price: 6.25, quantity: 0 },
        { id: 7, name: 'Waffle', price: 3.99, quantity: 0 },
        { id: 8, name: 'Bacon Cheddar Waffle', price: 4.99, quantity: 0 },
        { id: 9, name: 'Pesto + Feta Waffle', price: 4.99, quantity: 0 },
        { id: 10, name: 'Bacon + Cheddar Sandwich', price: 5, quantity: 0 },
        { id: 11, name: 'Turkey Sausage + Pepper Jack', price: 5.99, quantity: 0 },
        { id: 12, name: 'Veggie + Pepper Jack', price: 4.99, quantity: 0 },
        { id: 13, name: 'Egg & Cheddar', price: 4.99, quantity: 0 },
        { id: 14, name: 'Aussie Toast', price: 2.99, quantity: 0 },
        { id: 15, name: 'Stacks', price: 3.99, quantity: 0 },
        { id: 16, name: 'Hashbrown', price: 2, quantity: 0 },
        { id: 17, name: 'Sides', price: 1.99, quantity: 0 },
        { id: 18, name: 'Chicken Avocado', price: 6.99, quantity: 0 },
        { id: 19, name: 'Tomato Mozzarella', price: 5.99, quantity: 0 },
        { id: 20, name: 'Ham + Cheese', price: 6.5, quantity: 0 },
        { id: 21, name: 'Grilled Cheese', price: 3.99, quantity: 0 },
        { id: 22, name: 'Tomato Soup', price: 3, quantity: 0 },
        { id: 23, name: 'Waffle Dog', price: 2.99, quantity: 0 },
        { id: 24, name: 'Drip', price: 1.99, quantity: 0 },
        { id: 25, name: 'Americano', price: 2.99, quantity: 0 },
        { id: 26, name: 'Double Espresso', price: 2.99, quantity: 0 },
        { id: 27, name: 'Cappuccino', price: 1.99, quantity: 0 },
        { id: 28, name: 'Latte', price: 2.99, quantity: 0 },
        { id: 29, name: 'Mocha', price: 3.99, quantity: 0 },
        { id: 30, name: 'White Mocha', price: 3.99, quantity: 0 },
        { id: 31, name: 'Iced Coffee', price: 2.99, quantity: 0 },
        { id: 32, name: 'Iced Tea', price: 1.99, quantity: 0 },
        { id: 33, name: 'Lemonade', price: 2.99, quantity: 0 },
        { id: 34, name: 'Chai Latte', price: 2.99, quantity: 0 },
        { id: 35, name: 'Hot Cocoa', price: 2.99, quantity: 0 },
    ]);

    const onAdd = (id, quantity) => {
        setCart(
            [...cart].map(item => {
                if (item.id === id) {
                    return { ...item, quantity: Number(cart.filter(item => item.id === id)[0].quantity) + Number(quantity) };
                } else return item;
            }),
        );
    };

    const RenderCart = () => {
        const items = cart.filter(a => a.quantity > 0);
        if (items.length) {
            return <Cart items={items} />;
        } else return <Cart />;
    };

    return (
        <div>
            <Header />
            <main>
                <Switch>
                    <Route path="/cart" component={RenderCart} />
                    <Route path="/home" component={Home} />
                    <Route path="/menu" render={() => <Menu products={products} />} />
                    <Route exact path="/order" render={() => <Order onAdd={(id, quantity) => onAdd(id, quantity)} products={products} />} />
                    <Route path="/order/:category" render={props => <Order onAdd={(id, quantity) => onAdd(id, quantity)} products={products} paramsVal={props.match.params.category} />} />
                    <Route path="/about" component={About} />
                    <Redirect to="/home" />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}
export default Main;
