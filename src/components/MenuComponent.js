import React from 'react';

function Menu(props) {
    const pastries = props.items
        .filter(item => item.category === 'pastries')
        .map(item => {
            return (
                <React.Fragment>
                    <h5 className="col-6">{item.name}</h5>
                    <h5 className="col">${item.price}</h5>
                </React.Fragment>
            );
        });

    return (
        <div className="container">
            <h2 className="text-center mb-3">Our Menu</h2>

            <hr className="hrstyle" />
            <h4 className="text-center">Pastries</h4>
            <hr className="hrstyle" />

            <div className="row mx-auto p-md-4">{pastries} </div>

            <hr className="hrstyle" />
            <h4 className="text-center">Waffles</h4>
            <hr className="hrstyle" />
            <div className="row p-md-4">
                <div className="col-10">
                    <h5>Vegan + Gluten Free Waffle</h5>
                    <h5>Waffle</h5>
                    <h5>Bacon Cheddar Waffle</h5>
                    <h5>Pesto + Feta Waffle</h5>
                </div>
                <div className="col-2 text-right">
                    <h5>$6.25</h5>
                    <h5>$3.99</h5>
                    <h5>$4.99</h5>
                    <h5>$4.99</h5>
                </div>
            </div>

            <hr className="hrstyle" />
            <h4 className="text-center">Breakfast</h4>
            <hr className="hrstyle" />
            <div className="row p-md-4">
                <div className="col-10">
                    <h5>Bacon + Cheddar Sandwich</h5>
                    <h5>Turkey Sausage + Pepper Jack</h5>
                    <h5>Veggie + Pepper Jack</h5>
                    <h5>Egg & Cheddar</h5>
                    <h5>Aussie Toast</h5>
                    <h5>Stacks</h5>
                    <h5>Hashbrown</h5>
                    <h5>Sides</h5>
                </div>
                <div className="col-2 text-right">
                    <h5>$5.00</h5>
                    <h5>$5.99</h5>
                    <h5>$4.99</h5>
                    <h5>$4.00</h5>
                    <h5>$2.99</h5>
                    <h5>$3.99</h5>
                    <h5>$2.00</h5>
                    <h5>$1.99</h5>
                </div>
            </div>

            <hr className="hrstyle" />
            <h4 className="text-center">Lunch</h4>
            <hr className="hrstyle" />
            <div className="row p-md-4">
                <div className="col-10">
                    <h5>Chicken Avocado</h5>
                    <h5>Tomato Mozzarella</h5>
                    <h5>Ham + Cheese</h5>
                    <h5>Grilled Cheese</h5>
                    <h5>Tomato Soup</h5>
                    <h5>Waffle Dog</h5>
                </div>
                <div className="col-2 text-right">
                    <h5>$6.99</h5>
                    <h5>$5.99</h5>
                    <h5>$6.50</h5>
                    <h5>$3.99</h5>
                    <h5>$3.00</h5>
                    <h5>$2.99</h5>
                </div>
            </div>

            <hr className="hrstyle" />
            <h4 className="text-center">Drinks</h4>
            <hr className="hrstyle" />
            <div className="row p-md-4">
                <div className="col-10">
                    <h5>Drip</h5>
                    <h5>Americano</h5>
                    <h5>Double Espresso</h5>
                    <h5>Cappuccino</h5>
                    <h5>Latte</h5>
                    <h5>Mocha</h5>
                    <h5>White Mocha</h5>
                    <h5>Iced Coffee</h5>
                    <h5>Iced Tea</h5>
                    <h5>Lemonade</h5>
                    <h5>Chai Latte</h5>
                    <h5>Hot Cocoa</h5>
                </div>
                <div className="col-2 text-right">
                    <h5>$1.99</h5>
                    <h5>$2.99</h5>
                    <h5>$2.99</h5>
                    <h5>$1.99</h5>
                    <h5>$2.99</h5>
                    <h5>$3.99</h5>
                    <h5>$3.99</h5>
                    <h5>$2.99</h5>
                    <h5>$1.99</h5>
                    <h5>$2.99</h5>
                    <h5>$2.99</h5>
                    <h5>$2.99</h5>
                </div>
            </div>
        </div>
    );
}
export default Menu;
