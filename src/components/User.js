import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <>
            <div className='user_detail'>
                <img src="http://unsplash.it/56/56?gravity=center" alt="" />
                <div className='user_name'>
                    <h3>harishnantans</h3>
                    <p>Harish Nanthan</p>
                </div>
            </div>
            <div className='cta_switch_btn'>
                <Link to="">Switch</Link>
            </div>
        </>
    )
}
