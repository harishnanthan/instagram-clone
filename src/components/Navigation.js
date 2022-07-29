import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";
import { ReactComponent as HomeIcon } from "../assets/svg/home.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/explore.svg";
import { ReactComponent as HeartIcon } from "../assets/svg/Heart.svg";
import { ReactComponent as MessageIcon } from "../assets/svg/message.svg";
import { ReactComponent as AddIcon } from "../assets/svg/add.svg";
import { useDispatch } from 'react-redux';
import { POSTSEARCH } from '../redux/actions/postActions';
export default function Navigation() {

    const dispatch = useDispatch()

    const [fromData, setFormData] = useState({
        search: ""
    })

    const submitHandler = event => {
        event.preventDefault();
        dispatch(POSTSEARCH(fromData.search))
    }

    const changeHandler = event => {
        // dispatch(POSTSEARCH(fromData.search))
        const { name, value } = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    
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
                    <form onSubmit={submitHandler}>
                        <input type="search" placeholder='Search' name='search' onChange={changeHandler}/>
                    </form>
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
