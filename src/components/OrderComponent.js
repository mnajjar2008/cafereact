import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Rendercard(props) {
    const cardcategory = props.items.map(item => {
        return (
            <article className="col-9 col-sm-8 col-md-6 col-lg-4 mx-auto">
                <div key={item.id} className="card">
                    <div className="card-header justify-content-between d-flex">
                        <h6>{item.name}</h6>
                        <h6>${item.price.toFixed(2)}</h6>
                    </div>
                    <figure className="card-body">
                        <img src={item.image} alt={item.name} />
                    </figure>
                    <figcaption className="card-footer">
                        {item.description}
                        <form className="text-right">
                            <label htmlFor={item.name}>QTY</label>
                            <input size="2" type="text" pattern="[1-9]" title="Add items less than 9" id={item.name} name={item.name} value="1" />
                            <button type="submit" className="form-control">
                                Add
                            </button>
                        </form>
                    </figcaption>
                </div>
            </article>
        );
    });
    return cardcategory;
}

function Order(props) {
    console.log(props);
    return (
        <div className="container">
            <Nav className="nav nav-fill p-1 text-center flex-column flex-md-row">
                <NavItem>
                    <NavLink className="nav-link" to="/pastries">
                        Pastries
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/waffles">
                        Waffles
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/breakfast">
                        Breakfast
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="nav-link" to="/lunch">
                        Lunch
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/drinks">
                        Drinks
                    </NavLink>
                </NavItem>
            </Nav>
            <div className="row">
                <Rendercard items={props.items} />
            </div>
        </div>
    );
}
export default Order;
