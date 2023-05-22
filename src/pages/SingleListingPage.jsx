import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SingelListing from "../components/List/SingeListing";
import { APIGetSingleVenue } from "../components/APIcalls/ApiCalls";

export default function SingleListingPage() {
  const listingRef = useRef(null);

  useEffect(() => {
    listingRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

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
  return (
    <div className="full-view" ref={listingRef}>
      {listing ? (
        <div>
          <SingelListing {...listing} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
