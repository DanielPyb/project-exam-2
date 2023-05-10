import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingelListing from "../components/SingeListing";
import { Row, Col, Button } from "react-bootstrap";

export default function SingleListingPage() {
  const [listing, setListing] = useState(undefined);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://nf-api.onrender.com/api/v1/holidaze" + "/venues/" + id)
      .then((res) => res.json())
      .then((result) => setListing(result));
  }, []);
  console.log(listing);
  return (
    <>
    {listing ? ( <div>
    <SingelListing {...listing} />
     </div>) : (
        <div>Loading</div>
     )}
     </>
  );
  
}
