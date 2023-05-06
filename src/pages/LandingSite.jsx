import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function LandingSite() {
  return (
    <>
    <div className='landing-page'>
    <div className='hero'>
        <h1 className='hero-title'>HoliDaze</h1>
        <h4 className='hero-text'>Experience vacations how they were meant to be!</h4>
        <Link to={"/login"}><Button>sign up</Button></Link>
        <Link to={"/listings"}><p className='hero-link'><a href="">tour site</a></p></Link>
      </div>
    </div>
    </>
  )
}