import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const OrderNav = () => {
    return (
        <Nav className="nav nav-fill p-1 text-center flex-column flex-md-row">
            <NavItem>
                <NavLink className="nav-link" to="/order/pastries">
                    Pastries
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/order/waffles">
                    Waffles
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/order/breakfast">
                    Breakfast
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className="nav-link" to="/order/lunch">
                    Lunch
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/order/drinks">
                    Drinks
                </NavLink>
            </NavItem>
        </Nav>
    );
};

export default OrderNav;
