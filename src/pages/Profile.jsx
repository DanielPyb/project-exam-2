import React, { useCallback, useEffect, useRef, useState } from "react";
import Avatar from "../components/Profile/Avatar";
import ForRentListings from "../components/Profile/ForRentListings";
import { Col, Container, Row } from "react-bootstrap";
import BiddedOnListings from "../components/Profile/BiddedOnListings";
import {
  APIGetProfileBookings,
  APIGetProfileVenues,
  APIGetSingleProfile,
} from "../components/APIcalls/ApiCalls";
import { accessToken, profileName } from "../components/APIcalls/accessToken";
import NewVenue from "../components/ModalCalls/NewVenue";

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
          profileName,
          accessToken
        );
        setProfile(fetchedProfile);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfile();
  }, []);

  const [biddedListings, setBiddedListings] = useState([]);
  useEffect(() => {
    async function fetchProfileBookings() {
      try {
        const fetchedBiddedListings = await APIGetProfileBookings(
          profileName,
          accessToken
        );
        setBiddedListings(fetchedBiddedListings);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfileBookings();
  }, []);

  const [venueListings, setVenueListings] = useState(undefined);

  const fetchVenueListings = useCallback(async () => {
    try {
      const fetchedVenueListings = await APIGetProfileVenues(
        profileName,
        accessToken
      );
      setVenueListings(fetchedVenueListings);
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    fetchVenueListings();
  }, [fetchVenueListings]);

  return (
    <div className="full-view" ref={profileRef}>
      {profile && venueListings && biddedListings ? (
        <Container>
          <Row>
            <Col>
              <Avatar {...profile} />
            </Col>
            {profile.venueManager && (
              <Col>
                <NewVenue onUpdateVenue={fetchVenueListings} />
              </Col>
            )}
          </Row>
          <Row s={1} lg={2} className="gx-4">
            {venueListings.length >= 1 ? (
              <ForRentListings list={venueListings} />
            ) : null}
            {biddedListings.length >= 1 ? (
              <BiddedOnListings list={biddedListings} />
            ) : null}
          </Row>
        </Container>
      ) : (
        <div> loading </div>
      )}
    </div>
  );
}
