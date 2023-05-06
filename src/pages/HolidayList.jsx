import React, { useEffect, useState } from 'react'
import ListItems from '../components/ListItems'
import { baseURL } from '../utilities/BaseUrl';
import { Col, Container, Row } from 'react-bootstrap';
import { Search } from '../components/Search';



export default function HolidayListPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch(baseURL + "/venues")
        .then((res) => res.json())
        .then((result) => setItems(result));
    }, []);
    return (
    <>
    <Container>
    <Search items={items}/>
    <Row xs={1} md={2} lg={3} xl={4}>
        {items.map((item) => (
            <Col key={item.key}>
                <ListItems {...item} />
            </Col>
        ))}
    </Row>
    </Container>
    </>
  )
}
