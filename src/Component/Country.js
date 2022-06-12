import React from 'react'

import { Row, Col, Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
const Country = (props) => {
    const handleRemoveButton = (name) => {
        props.removeCountry(name)
    }
    return (
        <div>
            <Row xs={1} md={3} lg={4}>
                {
                    props.data.map((data) => {
                        const { name, flags, capital, area, population } = data;
                        return (
                            <Col>
                                <Container>
                                    <Card className='m-2' style={{ width: '18rem' }} key={data.key}>
                                        <Card.Img variant="top" src={flags.png} style={{ height: "200px" }} />
                                        <Card.Body>
                                            <Card.Title>{name.common}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Capital : {capital}</ListGroupItem>
                                            <ListGroupItem>Population : {population}</ListGroupItem>
                                            <ListGroupItem>Area : {area}</ListGroupItem>
                                            <ListGroupItem className='text-right'><i class="fa  fa-trash" aria-hidden="true"
                                                onClick={() => handleRemoveButton(name.common)}

                                            ></i></ListGroupItem>

                                        </ListGroup>
                                    </Card>
                                </Container>

                            </Col>
                        );
                    })
                }
            </Row>

        </div>
    )
}

export default Country