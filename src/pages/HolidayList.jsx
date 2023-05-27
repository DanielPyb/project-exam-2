import React, { useEffect, useRef, useState } from "react";
import ListItems from "../components/List/ListItems";
import { Col, Container, Row } from "react-bootstrap";
import { Search } from "../components/List/Search";
import { APIGetHolidazeVenues } from "../utilities/ApiCalls";

export default function HolidayListPage() {
  const listRef = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    async function fetchVenues() {
      try {
        const venues = await APIGetHolidazeVenues();
        setItems(venues);
      } catch (error) {
        console.error(error);
      }
    }
    fetchVenues();
  }, []);

  return (
    <>
      <div className="flower-background">
        <div className="full-view" ref={listRef}>
          <Container>
            <Row xs={1} lg={2}>
              <Search items={items} />
            </Row>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
              {items.map((item) => (
                <Col key={item.key}>
                  <ListItems listItemObject={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
