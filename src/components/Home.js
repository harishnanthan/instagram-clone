import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Feed from './Feed';

export default function Home() {
    console.log("HOME")
    const isLogged = useSelector((state) => state.login)
    if(!isLogged){
        return <Navigate to="/login" replace />;
    } 
    else
        return (
            <div className='home'>
                <Navigation/>
                <Feed/>
            </div>
        )
}
