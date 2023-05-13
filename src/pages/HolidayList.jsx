import React, { useEffect, useRef, useState } from 'react'
import ListItems from '../components/ListItems'
import { Col, Container, Row } from 'react-bootstrap';
import { Search } from '../components/Search';
import { APIGetHolidazeVenues } from '../components/APIcalls/ApiCalls';



export default function HolidayListPage() {
    const [items, setItems] = useState([]);
    const listRef = useRef(null);

    useEffect(() => {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);


    useEffect(() => {
      async function fetchVenues() {
        try{
          const venues = await APIGetHolidazeVenues();
          setItems(venues);
        } catch (error) {
          console.error(error);
        }
      }
      fetchVenues();
    },[]);
    return (
    <>
    <div className='full-view' ref={listRef}>
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
    </div>
    </>
  )
}
