import React from 'react';
import {Nav, Navbar, Navitem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const TopNav = (props) => {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to = "/">
                            <a href = "/"> My Birthday List </a>
                        </LinkContainer>
                    </Navbar.Brand>
                    <navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to = "/categories">
                            <NavItem eventKey = {2}>
                                Categories
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TopNav;
