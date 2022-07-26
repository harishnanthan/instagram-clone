import React from 'react'
import { Link } from 'react-router-dom'

export default function SuggestionUser() {
    return (
        <div className='one'>
            <div className='suggestuser_detail'>
                <img src="http://unsplash.it/32/32?gravity=center" alt="" />
                <div className='suggestuser_name'>
                    <h3>i.am_harish_v</h3>
                    <p>New to Instagram</p>
                </div>
            </div>
            <div className='cta_follow_btn'>
                <Link to="">Follow</Link>
            </div>
        </div>
    )
}
