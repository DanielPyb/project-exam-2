import React, { useEffect, useState } from 'react'
import Avatar from '../components/Avatar'
import ForRentListings from '../components/ForRentListings'
import { Container, Row } from 'react-bootstrap'
import BiddedOnListings from '../components/BiddedOnListings'
import { APIGetProfileVenues, APIGetSingleProfile } from '../components/APIcalls/ApiCalls'
import { useParams } from 'react-router-dom'
import { accessToken } from '../components/APIcalls/accessToken'



export default function Profile() {
  
  const [profile, setProfile] = useState(undefined);
  useEffect(() =>{
    async function fetchProfile() {
      try {
        const fetchedProfile = await APIGetSingleProfile("danielPyb", accessToken)
        setProfile(fetchedProfile);
        console.log(profile)
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfile();
  }, []);

  const [biddedListings, setBiddedListings] = useState(undefined);
  useEffect(() => {
    async function fetchBiddedListings() {
      try {
      const fetchedBiddedListings = await APIGetProfileVenues("danielPyb", accessToken)
      setBiddedListings(fetchedBiddedListings);
      console.log(biddedListings);
    } catch(error) {
      console.error(error);
    }
  }
  fetchBiddedListings();
  }, []);

  const [venueListings, setVenueListings] = useState(undefined);
  useEffect(() => {
    async function fetchBiddedListings() {
      try {
      const fetchedVenueListings = await APIGetProfileVenues("danielPyb", accessToken)
      setVenueListings(fetchedVenueListings);
      console.log(venueListings);
    } catch(error) {
      console.error(error);
    }
  }
  fetchBiddedListings();
  }, []);


  return (
    <>
    {profile && venueListings && biddedListings ? (
    <Container>
    <h1>{profile.name}</h1>
      <Avatar />
      <Row s={1} lg={2} className="gx-4">     
      {venueListings.length >= 1 ? (<ForRentListings />) : null}
      {biddedListings.length >= 1 ? (<BiddedOnListings />) : null}
      </Row>
    </Container> ) : ( <div> loading </div>)}
    </>
  );

}

