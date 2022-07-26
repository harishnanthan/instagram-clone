import React from 'react'
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";
import { ReactComponent as HomeIcon } from "../assets/svg/home.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/explore.svg";
import { ReactComponent as HeartIcon } from "../assets/svg/Heart.svg";
import { ReactComponent as MessageIcon } from "../assets/svg/message.svg";
import { ReactComponent as AddIcon } from "../assets/svg/add.svg";
export default function Navigation() {
    return (
        <nav>
            <div className='nav_container'>
                <div className='nav_logo'>
                    <img className='logo'
                        src='https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png'
                        alt='insta-logo'
                    />
                </div>
                <div className='nav_search'>
                        <SearchIcon />
                        <input type="search" placeholder='Search'/>
                </div>
                <div className='nav_links'>
                    <ul>
                        <li><HomeIcon /></li>
                        <li><MessageIcon /></li>
                        <li><AddIcon /></li>
                        <li><ExploreIcon /></li>
                        <li><HeartIcon /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
