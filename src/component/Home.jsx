import React from 'react'
import './home.scss';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
    return (
        <div className='home'>
            <h2>Welcome to Virtual Interview Assistant</h2>
            <Link to="StartInterview" className='link'><button>Start</button></Link>
            
            <Outlet />
        </div>
    )
}
