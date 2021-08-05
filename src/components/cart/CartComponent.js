import React from 'react';

function Cart(props) {
    if (props.items) {
        return (
            <React.Fragment>
                <div className="container">
                    {props.items.map(a => 
                        <div>{a.id}{"  "}{a.name}{"  "}{a.price}{"  "}{a.quantity}</div>
                    )}
                    <hr />
                </div>
            </React.Fragment>
        );
    } else return <div />;
}
export default Cart;
