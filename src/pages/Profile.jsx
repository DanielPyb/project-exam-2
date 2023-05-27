import React, { useCallback, useEffect, useRef, useState } from "react";
import Avatar from "../components/Profile/Avatar";
import ForRentListings from "../components/Profile/ForRentListings";
import { Col, Container, Row } from "react-bootstrap";
import BiddedOnListings from "../components/Profile/BiddedOnListings";
import {
  APIGetProfileBookings,
  APIGetProfileVenues,
  APIGetSingleProfile,
} from "../utilities/ApiCalls";
import { accessToken, profileName } from "../utilities/accessToken";
import NewVenue from "../components/ModalCalls/NewVenue";

export default function Profile() {
  const profileRef = useRef(null);
  const [profile, setProfile] = useState(undefined);
  const [biddedListings, setBiddedListings] = useState([]);
  const [venueListings, setVenueListings] = useState(undefined);


  const fetchProfile = useCallback(async () => {
    try {
      const fetchedProfile = await APIGetSingleProfile(
        profileName,
        accessToken
      );
      setProfile(fetchedProfile);
    } catch (error) {
      console.error(error);
    }
  }, []);
  const fetchProfileBookings = useCallback(async () => {
    try {
      const fetchedBiddedListings = await APIGetProfileBookings(
        profileName,
        accessToken
      );
      setBiddedListings(fetchedBiddedListings);
    } catch (error) {
      console.error(error);
    }
  }, []);
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
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  useEffect(() => {
    fetchProfileBookings();
  }, [fetchProfileBookings]);
  useEffect(() => {
    fetchVenueListings();
  }, [fetchVenueListings]);

  return (
    <div className="flower-background">
      <div className="full-view" ref={profileRef}>
        {profile && venueListings && biddedListings ? (
          <Container>
            <Row>
              <Col>
                <Avatar {...profile} onUpdateAvatar={fetchProfile} />
              </Col>
              {profile.venueManager && (
                <Col>
                  <NewVenue onUpdateVenue={fetchVenueListings} />
                </Col>
              )}
            </Row>
            <Row s={1} lg={2} className="gx-4">
              {venueListings.length >= 1 ? (
                <ForRentListings
                  list={venueListings}
                  onUpdateVenue={fetchVenueListings}
                />
              ) : null}
              {biddedListings.length >= 1 ? (
                <BiddedOnListings
                  list={biddedListings}
                  onUpdateBookings={fetchProfileBookings}
                />
              ) : null}
            </Row>
          </Container>
        ) : (
          <div> loading </div>
        )}
      </div>
    </div>
  );
}
