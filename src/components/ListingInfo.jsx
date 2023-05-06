import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { baseURL } from '../utilities/BaseUrl';
import {Row, Col, Button} from 'react-bootstrap';

export default function ListingInfo() {
const [item, setItem] = useState(undefined);
const { id } = useParams();
useEffect(() => {
      fetch(`${baseURL}/venues/${id}`)
        .then((res) => res.json())
        .then((result) => {
          setItem(result);
          console.log(result);
        })
  }, []);
  return (
    <>
    <div className='burn-card-top'>
    <img src={item.media[0]}></img>
    <div className='burn-card-title'>
<h2>{item.name}</h2>
<p>{item.description}</p>
    </div>
<div className='burn-card-title'>
<h2>Includes</h2>
<ul>
</ul>
</div>
<div className='burn-card-title'>
<h2>Availability</h2>
<p>DATE RANGE INSERT</p>
</div>
<div className='burn-card-title'>
<h2>Location</h2>
<p>{item.location.country}</p>
<p>{item.location.address}, {item.location.zip} - <strong>{item.location.city}</strong></p>
</div>
</div>
<div className='burn-card-booking'>
<Row>
<Col>
    <p>{item.price},- per night</p>
</Col>
<Col>
    <Button>Book</Button>
    </Col>
</Row>
</div>
</>
  )
}