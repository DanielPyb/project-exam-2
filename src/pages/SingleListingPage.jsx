import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingelListing from "../components/SingeListing";
import { Row, Col, Button } from "react-bootstrap";
import { APIGetSingleVenue } from "../components/APIcalls/ApiCalls";



export default function SingleListingPage() {
  const [listing, setListing] = useState(undefined);
  const { id } = useParams();
  useEffect(() => {
    async function fetchVenue() {
      try {
        const venue = await APIGetSingleVenue(id);
        setListing(venue);
      } catch (error) {
        console.error(error);
      }
    }
    fetchVenue();
  }, [id]);
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
