import {Row, Col, Button} from 'react-bootstrap';

export default function SingelListing(name, description, media, location, price) {
return (
    <>
    <div className='burn-card-top'>
    <img src={media[0]}></img>
    <div className='burn-card-title'>
<h2>{name}</h2>
<p>{description}</p>
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
<p>{location.country}</p>
<p>{location.address}, {location.zip} - <strong>{location.city}</strong></p>
</div>
</div>
<div className='burn-card-booking'>
<Row>
<Col>
    <p>{price},- per night</p>
</Col>
<Col>
    <Button>Book</Button>
    </Col>
</Row>
</div>
</>
  )
}