import React from 'react';

function Rendercategoryitem(props) {
    const items = props.item.map(item => {
        return (
            <div className="d-flex justify-content-between">
                <h5>{item.name}</h5>
                <h5>${item.price}</h5>
            </div>
        );
    });
    return (
        <React.Fragment>
            <hr className="hrstyle" />
            <div className="p-sm-5">{items}</div>
        </React.Fragment>
    );
}

function Menu(props) {
    return (
        <div className="container">
            <h2 className="text-center mb-3">Our Menu</h2>

            <h4 className="text-center">Pastries</h4>
            <Rendercategoryitem item={props.items.filter(item => item.category === 'pastries')} />
            <h4 className="text-center">Waffles</h4>
            <Rendercategoryitem item={props.items.filter(item => item.category === 'waffles')} />
            <h4 className="text-center">Breakfast</h4>
            <Rendercategoryitem item={props.items.filter(item => item.category === 'breakfast')} />
            <h4 className="text-center">Lunch</h4>
            <Rendercategoryitem item={props.items.filter(item => item.category === 'lunch')} />
            <h4 className="text-center">Drinks</h4>
            <Rendercategoryitem item={props.items.filter(item => item.category === 'drinks')} />
        </div>
    );
}
export default Menu;
