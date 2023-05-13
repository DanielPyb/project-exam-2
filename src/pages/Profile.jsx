import React, { useEffect, useRef, useState } from "react";
import Avatar from "../components/Avatar";
import ForRentListings from "../components/ForRentListings";
import { Container, Row } from "react-bootstrap";
import BiddedOnListings from "../components/BiddedOnListings";
import {
  APIGetProfileBookings,
  APIGetProfileVenues,
  APIGetSingleProfile,
} from "../components/APIcalls/ApiCalls";
import { useParams } from "react-router-dom";
import { accessToken } from "../components/APIcalls/accessToken";

export default function Profile() {
  const profileRef = useRef(null);

  useEffect(() => {
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [profile, setProfile] = useState(undefined);
  useEffect(() => {
    async function fetchProfile() {
      try {
        const fetchedProfile = await APIGetSingleProfile(
          "danielPyb",
          accessToken
        );
        setProfile(fetchedProfile);
        console.log(profile);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfile();
  }, []);

  const [biddedListings, setBiddedListings] = useState([]);
  useEffect(() => {
    async function fetchBiddedListings() {
      try {
        const fetchedBiddedListings = await APIGetProfileBookings(
          "danielPyb",
          accessToken
        );
        setBiddedListings(fetchedBiddedListings);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBiddedListings();
  }, []);

  const [venueListings, setVenueListings] = useState(undefined);
  useEffect(() => {
    async function fetchBiddedListings() {
      try {
        const fetchedVenueListings = await APIGetProfileVenues(
          "danielPyb",
          accessToken
        );
        setVenueListings(fetchedVenueListings);
        console.log(venueListings);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBiddedListings();
  }, []);


  return (
    <div className="full-view" ref={profileRef}>
      {profile && venueListings && biddedListings ? (
        <Container>
          <Avatar {...profile} />
          <Row s={1} lg={2} className="gx-4">
            {venueListings.length >= 1 ? <ForRentListings /> : null}
            {biddedListings.length >= 1 ? <BiddedOnListings list={biddedListings} /> : null}
          </Row>
        </Container>
      ) : (
        <div> loading </div>
      )}
    </div>
  );
}
