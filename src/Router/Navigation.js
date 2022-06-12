import React, { useState, useEffect } from 'react'

import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap'

const Navigation = (props) => {
    const [search, setSearch] = useState("");

    const searchBarHandeler = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        props.searchbarHandeler(search)
    }, [search])

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" >
                <Container>
                    <Navbar.Brand href="/">Country App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '300px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                value={search}
                                onChange={searchBarHandeler}
                                placeholder="Search Country"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation