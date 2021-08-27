import { useState, useEffect } from 'react';
import { fetchProducts } from '../../lib/data/mockData';
import Loading from '../common/LoadingComponent';
import OrderNav from './OrderNavComponent';

const INIT_DATA = [
    { name: 'Muffin', quantity: 1 },
    { name: 'Scone', quantity: 1 },
    { name: 'Cookie', quantity: 1 },
    { name: 'Brownie', quantity: 1 },
    { name: 'GF Cookie', quantity: 1 },
    { name: 'Protein Puck', quantity: 1 },
    { name: 'Vegan + Gluten Free Waffle', quantity: 1 },
    { name: 'Waffle', quantity: 1 },
    { name: 'Bacon Cheddar Waffle', quantity: 1 },
    { name: 'Pesto + Feta Waffle', quantity: 1 },
    { name: 'Bacon + Cheddar Sandwich', quantity: 1 },
    { name: 'Turkey Sausage + Pepper Jack', quantity: 1 },
    { name: 'Veggie + Pepper Jack', quantity: 1 },
    { name: 'Egg & Cheddar', quantity: 1 },
    { name: 'Aussie Toast', quantity: 1 },
    { name: 'Stacks', quantity: 1 },
    { name: 'Hashbrown', quantity: 1 },
    { name: 'Sides', quantity: 1 },
    { name: 'Chicken Avocado', quantity: 1 },
    { name: 'Tomato Mozzarella', quantity: 1 },
    { name: 'Ham + Cheese', quantity: 1 },
    { name: 'Grilled Cheese', quantity: 1 },
    { name: 'Tomato Soup', quantity: 1 },
    { name: 'Waffle Dog', quantity: 1 },
    { name: 'Drip', quantity: 1 },
    { name: 'Americano', quantity: 1 },
    { name: 'Double Espresso', quantity: 1 },
    { name: 'Cappuccino', quantity: 1 },
    { name: 'Latte', quantity: 1 },
    { name: 'Mocha', quantity: 1 },
    { name: 'White Mocha', quantity: 1 },
    { name: 'Iced Coffee', quantity: 1 },
    { name: 'Iced Tea', quantity: 1 },
    { name: 'Lemonade', quantity: 1 },
    { name: 'Chai Latte', quantity: 1 },
    { name: 'Hot Cocoa', quantity: 1 },
];

const Order = ({ category, onAdd }) => {
    const [products, setProducts] = useState([]);
    const [state, setState] = useState(INIT_DATA);

    const fetchData = () => {
        const filter = category;
        fetchProducts(filter)
            .then(response => setProducts(response.data))
            .catch(error => new Error('cannot fetch data:', error));
    };

    useEffect(() => {
        setProducts([]);
        fetchData();
    }, [category]);

    const handleChange = e => {
        const newState = state.map(item => {
            if (item.name === e.target.name) {
                return { ...item, quantity: +e.target.value };
            } else return item;
        });

        setState(newState);
    };

    const handleSubmit = (e, id, quantity) => {
        e.preventDefault();
        onAdd(id, quantity);
    };

    const list = products.map(product => {
        return (
            <article key={product.id} className="col-9 col-sm-8 col-md-6 col-lg-4 mx-auto">
                <div className="card">
                    <div className="card-header justify-content-between d-flex">
                        <h6>{product.name}</h6>
                        <h6>${product.price.toFixed(2)}</h6>
                    </div>
                    <figure className="card-body">
                        <img src={product.image} alt={product.name} />
                    </figure>
                    <figcaption className="card-footer">
                        {product.description}
                        <form onSubmit={e => handleSubmit(e, product.id, state.filter(item => item.name === product.name)[0].quantity)} className="text-right">
                            <label htmlFor={product.name}>QTY</label>
                            <input size="2" type="text" pattern="[1-9]" title="Add products less than 9" id={product.name} name={product.name} value={state.filter(item => item.name === product.name)[0].quantity} onChange={handleChange} />
                            <button type="submit" className="form-control">
                                Add
                            </button>
                        </form>
                    </figcaption>
                </div>
            </article>
        );
    });

    if (products.length) {
        return (
            <div className="container">
                <OrderNav />
                <div className="row">{list}</div>
            </div>
        );
    }
    return (
        <div className="container">
            <OrderNav />
            <Loading />
        </div>
    );
};
export default Order;
