import React from 'react';

function Cart(props) {
    if (props.items) {
        const list = props.items.map(item => {
            return (
                <div className="row align-items-center bg-light m-1 p-2">
                    <div className="col-3">
                        <img width="100" height="100" src={item.image} alt={item.name} />
                    </div>
                    <div className="col-3 pl-5 p-sm-2">{item.name}</div>
                    <div className="col-3 text-center">{item.quantity}</div>
                    <div className="col-3 text-center">{item.price}</div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className=" p-2 d-flex justify-content-between  section-title">
                    <h6 className="col-6 ">ITEMS</h6>
                    <h6 className="col-3 text-center">QTY</h6>
                    <h6 className="col-3 text-center">PRICE</h6>
                </div>
                {list}
            </div>
        );
    } else return <div />;
}
export default Cart;
