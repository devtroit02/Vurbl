import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Card02 from './Card02'
import Card03 from './Card03'
import Card04 from './Card04'
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

export default function HomePage() {
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Hello VurbR</h1>
            <Link to="/prompt01"> <Card>   </Card> </Link> 

            <Link to="/prompt02">  <Card02> </Card02> </Link>

            <Link to="/prompt03">  <Card03> </Card03> </Link>
            <Link to="/prompt03">  <Card04> </Card04> </Link>

            <Link to="/prompt01"> <Card>   </Card> </Link> 
            <Link to="/prompt01"> <Card>   </Card> </Link> 
            <Link to="/prompt01"> <Card>   </Card> </Link> 
            <Link to="/prompt03">  <Card04> </Card04> </Link>
            <Link to="/prompt03">  <Card04> </Card04> </Link>

            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}


