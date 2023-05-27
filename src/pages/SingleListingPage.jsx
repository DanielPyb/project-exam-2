import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SingelListing from "../components/List/SingeListing";
import { APIGetSingleVenue } from "../utilities/ApiCalls";

export default function SingleListingPage() {
  const listingRef = useRef(null);
  const [listing, setListing] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    listingRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
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
  return (
    <div className="full-view" ref={listingRef}>
      {listing ? (
        <div>
          <SingelListing listingInfo={listing} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
