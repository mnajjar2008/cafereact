import { useState, useEffect } from 'react';
import { PRODUCTS } from '../../lib/data/products';

const OrderList = props => {
    const [state, setState] = useState(PRODUCTS);
    const [cart, setCart] = useState([
        { id: 0, quantity: 0 },
        { id: 1, quantity: 0 },
        { id: 2, quantity: 0 },
        { id: 3, quantity: 0 },
        { id: 4, quantity: 0 },
        { id: 5, quantity: 0 },
        { id: 6, quantity: 0 },
        { id: 7, quantity: 0 },
        { id: 8, quantity: 0 },
        { id: 9, quantity: 0 },
        { id: 10, quantity: 0 },
        { id: 11, quantity: 0 },
        { id: 12, quantity: 0 },
        { id: 13, quantity: 0 },
        { id: 14, quantity: 0 },
        { id: 15, quantity: 0 },
        { id: 16, quantity: 0 },
        { id: 17, quantity: 0 },
        { id: 18, quantity: 0 },
        { id: 19, quantity: 0 },
        { id: 20, quantity: 0 },
        { id: 21, quantity: 0 },
        { id: 22, quantity: 0 },
        { id: 23, quantity: 0 },
        { id: 24, quantity: 0 },
        { id: 25, quantity: 0 },
        { id: 26, quantity: 0 },
        { id: 27, quantity: 0 },
        { id: 28, quantity: 0 },
        { id: 29, quantity: 0 },
        { id: 30, quantity: 0 },
        { id: 31, quantity: 0 },
        { id: 32, quantity: 0 },
        { id: 33, quantity: 0 },
        { id: 34, quantity: 0 },
        { id: 35, quantity: 0 },
    ]);

    const handlechange = e => {
        setState(
            [...state].map(item => {
                if (item.name === e.target.name) {
                    return { ...item, quantity: e.target.value };
                } else return item;
            }),
        );
    };
    const handleSubmit = (e, id) => {
        e.preventDefault();
        onAdd(id);
    };
    const onAdd = id => {
        setCart(
            [...cart].map(item => {
                if (item.id === id) {
                    return { ...item, quantity: Number(cart.filter(a => a.id === id)[0].quantity) + Number(state.filter(a => a.id === id)[0].quantity) };
                } else return item;
            }),
        );
    };

    const list = props.products.map(product => {
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
                        <form onSubmit={e => handleSubmit(e, product.id)} className="text-right">
                            <label htmlFor={product.name}>QTY</label>
                            <input size="2" type="text" pattern="[1-9]" title="Add products less than 9" id={product.name} name={product.name} value={state.filter(a => a.id === product.id)[0].quantity} onChange={handlechange} />
                            <button type="submit" className="form-control">
                                Add
                            </button>
                        </form>
                    </figcaption>
                </div>
            </article>
        );
    });

    return (
        <div className="container">
            <div className="row">{list}</div>
        </div>
    );
};
export default OrderList;
