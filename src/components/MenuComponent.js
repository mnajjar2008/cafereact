import React from 'react';

function Rendercategoryitem(props) {
    const specificcategorylist = props.items.map(item => {
        return (
            <div key={item.id} className="d-flex justify-content-between">
                <h5>{item.name}</h5>
                <h5>${item.price}</h5>
            </div>
        );
    });

    const categoryname = props.items[0].category[0].toUpperCase() + props.items[0].category.slice(1);

    return (
        <React.Fragment>
            <h4 className="text-center section-title p-3">{categoryname}</h4>
            <hr className="hrstyle p-1" />
            <div className="p-sm-5">{specificcategorylist}</div>
        </React.Fragment>
    );
}

function Menu(props) {
    return (
        <div className="container">
            <h2 className="text-center m-4">Our Menu</h2>
            <Rendercategoryitem items={props.items.filter(item => item.category === 'pastries')} />
            <Rendercategoryitem items={props.items.filter(item => item.category === 'waffles')} />
            <Rendercategoryitem items={props.items.filter(item => item.category === 'breakfast')} />
            <Rendercategoryitem items={props.items.filter(item => item.category === 'lunch')} />
            <Rendercategoryitem items={props.items.filter(item => item.category === 'drinks')} />
        </div>
    );
}
export default Menu;
