import React, { useEffect, useState } from 'react'
import ListingInfo from '../components/ListingInfo'
import { useParams } from "react-router-dom";
import { baseURL } from '../utilities/BaseUrl';


export default function ListingPage() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const newUrl = "https://api.noroff.dev/api/v1/holidaze/venues/6fbd2235-ae65-475c-bfd0-2bae0bda4180";

  async function singlePost(){
    const options = {
        method: "GET"
    }
    try{
      const response = await fetch(`${newUrl}`, options)
      const data = await response.json();
      console.log(response);
      setItem(data);
    } catch(error){
      console.log(error)
    }
  }
singlePost();

    return (
    <>
    {item ? (
    <ListingInfo {...item}/>
    ) : (
      <div>Loading...</div>
    )}

    </>
  )
}
