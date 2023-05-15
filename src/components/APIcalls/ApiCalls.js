// Auth

export async function APILogin(email, password) {
    const loginObject = {
        email,
        password
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginObject)
    };
    try {
            const response = await fetch("https://nf-api.onrender.com/api/v1/holidaze/auth/login", options);
            const data = await response.json();
            return data
    } catch(error) {
        console.error(error);
        throw new Error("Failed to login: " + error.message);
    }
    /* returned value should be 
        {
        "name": "string",
        "email": "user@example.com",
        "avatar": "string",
        "venueManager": true,
        "accessToken": "string"
        }
    */
}

export async function APIRegisterAccount(registerObject) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerObject)
    };
    try{
        const response = await fetch("https://nf-api.onrender.com/api/v1/holidaze/auth/register", options);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to register: " + error.message);
    }
        /* returned value should be 
    {
        "id": 0,
        "name": "string",
        "email": "user@example.com",
        "avatar": "string",
        "venueManager": false
    }
    */
}

// Profile

export async function APIGetProfiles(accessToken){
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    };
    try{
        const response = await fetch("https://nf-api.onrender.com/api/v1/holidaze/profiles", options);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to get profile list: " + error.message);
    }
            /* returned value should be 
[
  {
    "name": "string",
    "email": "user@example.com",
    "avatar": "string",
    "venueManager": false,
    "venues": [
      {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "description": "string",
        "media": "string",
        "price": 0,
        "maxGuests": 0,
        "rating": "string",
        "created": "2023-05-11T16:13:31.955Z",
        "updated": "2023-05-11T16:13:31.955Z",
        "meta": {
          "wifi": true,
          "parking": true,
          "breakfast": true,
          "pets": true
        },
        "location": {
          "address": "string",
          "city": "string",
          "zip": "string",
          "country": "string",
          "continent": "string",
          "lat": 0,
          "lng": 0
        },
        "owner": {
          "name": "string",
          "email": "string",
          "avatar": "string"
        }
      }
    ],
    "bookings": [
      {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "dateFrom": "2023-05-11T16:13:31.955Z",
        "dateTo": "2023-05-11T16:13:31.955Z",
        "guests": 0,
        "created": "2023-05-11T16:13:31.955Z",
        "updated": "2023-05-11T16:13:31.955Z",
        "venue": {
          "id": "string",
          "name": "string",
          "description": "string",
          "media": "string",
          "price": "string",
          "maxGuests": "string",
          "rating": "string",
          "created": "string",
          "updated": "string",
          "meta": "string",
          "location": "string",
          "owner": "string"
        },
        "customer": {
          "name": "string",
          "email": "string",
          "avatar": "string"
        }
      }
    ],
    "_count": "string"
  }
]
    */
}

export async function APIGetSingleProfile(name, accessToken){
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    };
    try{
        const response = await fetch("https://nf-api.onrender.com/api/v1/holidaze/profiles/" + name, options );
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to get profile list: " + error.message);
    }
            /* returned value should be 
{
  "name": "pmnX_h36rhL5OvxPuNjd",
  "email": "user@example.com",
  "avatar": "string",
  "venueManager": false,
  "venues": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "string",
      "description": "string",
      "media": "string",
      "price": 0,
      "maxGuests": 0,
      "rating": "string",
      "created": "2023-05-11T16:15:50.857Z",
      "updated": "2023-05-11T16:15:50.857Z",
      "meta": {
        "wifi": true,
        "parking": true,
        "breakfast": true,
        "pets": true
      },
      "location": {
        "address": "string",
        "city": "string",
        "zip": "string",
        "country": "string",
        "continent": "string",
        "lat": 0,
        "lng": 0
      },
      "owner": {
        "name": "string",
        "email": "string",
        "avatar": "string"
      }
    }
  ],
  "bookings": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateFrom": "2023-05-11T16:15:50.857Z",
      "dateTo": "2023-05-11T16:15:50.857Z",
      "guests": 0,
      "created": "2023-05-11T16:15:50.857Z",
      "updated": "2023-05-11T16:15:50.857Z",
      "venue": {
        "id": "string",
        "name": "string",
        "description": "string",
        "media": "string",
        "price": "string",
        "maxGuests": "string",
        "rating": "string",
        "created": "string",
        "updated": "string",
        "meta": "string",
        "location": "string",
        "owner": "string"
      },
      "customer": {
        "name": "string",
        "email": "string",
        "avatar": "string"
      }
    }
  ],
  "_count": "string"
}
    */
}

export async function APIChangeAvatar(name, avatar, accessToken){
    const changeObject = {
        avatar
    }
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(changeObject)
    };
    try{
        const response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/profiles/${name}/media`, options);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to update: " + error.message);
    }
        /* returned value should be 
    {
{
  "name": "J2v8OeJ4n1B17SHjL_zR",
  "email": "user@example.com",
  "avatar": "string",
  "venueManager": false,
  "venues": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "string",
      "description": "string",
      "media": "string",
      "price": 0,
      "maxGuests": 0,
      "rating": "string",
      "created": "2023-05-11T16:17:41.762Z",
      "updated": "2023-05-11T16:17:41.762Z",
      "meta": {
        "wifi": true,
        "parking": true,
        "breakfast": true,
        "pets": true
      },
      "location": {
        "address": "string",
        "city": "string",
        "zip": "string",
        "country": "string",
        "continent": "string",
        "lat": 0,
        "lng": 0
      },
      "owner": {
        "name": "string",
        "email": "string",
        "avatar": "string"
      }
    }
  ],
  "bookings": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateFrom": "2023-05-11T16:17:41.762Z",
      "dateTo": "2023-05-11T16:17:41.762Z",
      "guests": 0,
      "created": "2023-05-11T16:17:41.762Z",
      "updated": "2023-05-11T16:17:41.762Z",
      "venue": {
        "id": "string",
        "name": "string",
        "description": "string",
        "media": "string",
        "price": "string",
        "maxGuests": "string",
        "rating": "string",
        "created": "string",
        "updated": "string",
        "meta": "string",
        "location": "string",
        "owner": "string"
      },
      "customer": {
        "name": "string",
        "email": "string",
        "avatar": "string"
      }
    }
  ],
  "_count": "string"
}
    }
    */
}

export async function APIGetProfileVenues(name, accessToken){
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    };
    try{
        const response = await fetch("https://nf-api.onrender.com/api/v1/holidaze/profiles/" + name + "/venues?_bookings=true", options );
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to get list of venues: " + error.message);
    } 
}

export async function APIGetProfileBookings(name, accessToken){
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    };
    try{
        const response = await fetch("https://nf-api.onrender.com/api/v1/holidaze/profiles/" + name + "/bookings?_venue=true", options );
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to get list of bookings: " + error.message);
    } 
}

// Venues

export async function APIGetHolidazeVenues(){
    try{
        const response = await fetch("https://nf-api.onrender.com/api/v1/holidaze/venues");
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to get venue list: " + error.message);
    }
}

export async function APIGetSingleVenue(id){
    try{
        const response = await fetch("https://nf-api.onrender.com/api/v1/holidaze/venues/" + id);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to get venue list: " + error.message);
    }
}

export async function APIPostVenue(venueDetails, accessToken){
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(venueDetails)
    };
    try{
        const response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/venues`, options);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to post venue: " + error.message);
    }
}

export async function APIPutVenue(venueDetails, id, accessToken){
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(venueDetails)
    };
    try{
        const response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/venues/` + id, options);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to update venue: " + error.message);
    }
}

export async function APIDeleteVenue(id, accessToken){
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
    }
    try{
        const response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/venues/` + id, options);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to delete venue: " + error.message);
    }
}

// Booking

export async function APIBooking(){
    try{
        const response = await fetch("https://nf-api.onrender.com/api/v1/holidaze/bookings");
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to get booking list: " + error.message);
    }
}

export async function APIBookingPost(bookingDetails, accessToken){
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        } ,
        body: JSON.stringify(bookingDetails)
    };
    try{
        const response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/bookings`, options);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to book: " + error.message);
    }
}

export async function APISingleBooking(id){
    try{
        const response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/bookings/${id}`);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to get booking: " + error.message);
    }
}

export async function APIPutBooking(bookingDetails, id, accessToken){
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(bookingDetails)
    };
    try{
        const response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/bookings/` + id, options);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to update booking: " + error.message);
    }
}

export async function APIDeleteBooking(id, accessToken){
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
    }
    try{
        const response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/bookings/` + id, options);
        const data = await response.json();
        return data
    }
    catch(error) {
        console.error(error);
        throw new Error("Failed to delete booking: " + error.message);
    }
}