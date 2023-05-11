import React, { useEffect, useState } from 'react'
import Avatar from '../components/Avatar'
import ForRentListings from '../components/ForRentListings'
import { Container, Row } from 'react-bootstrap'
import BiddedOnListings from '../components/BiddedOnListings'
import { APIGetSingleProfile } from '../components/APIcalls/ApiCalls'
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


  return (
    <Container>
      <Avatar />
      <Row s={1} lg={2} className="gx-4">
      <ForRentListings />
      <BiddedOnListings />
      </Row>
    </Container>
  )
}
