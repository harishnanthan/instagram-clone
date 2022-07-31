import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FeedCard from './FeedCard'
// import { MemoizedFeedCard } from '../components/FeedCard'
import AddPost from './AddPost'
import SuggestionUser from './SuggestionUser'
import User from './User'

export default function Feed() {

    const data = useSelector(state => state.post)
    console.log(data)

    const arrayForUser = [1, 2, 3]

    console.log("rendered")

    return (
        <div className='feed'>
            
            <div className='feed_left'>
                {/* <div className='stories'></div> */}
                <AddPost/>
                <div className='feed_contents'>
                    {
                        data.map((el,index) => (
                            <FeedCard key={index} post={el} />
                        ))
                    }
                </div>
            </div>
            <div className='feed_right'>
                <div className='feed_right_user'>
                    <User />
                </div>
                <div className='suggestion_box'>
                    <div className='suggestion_text'>
                        <h3>Suggestions for you</h3>
                        <Link to="">See All</Link>
                    </div>
                    <div className='suggested_user'>
                        {arrayForUser.map((el) => (
                            <SuggestionUser key={el} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
