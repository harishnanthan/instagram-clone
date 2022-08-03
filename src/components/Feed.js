import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FeedCard from './FeedCard'
// import PostModel from "./PostModel";
// import { MemoizedFeedCard } from '../components/FeedCard'
import AddPost from './AddPost'
import SuggestionUser from './SuggestionUser'
import User from './User'

export default function Feed() {
    const value = useSelector(state => state.post)
    console.log("VALUE",value)
    const [post, setPost] = useState(JSON.parse(localStorage.getItem('post')) || value)
    console.log("POST",post)

    useEffect(() => {   
        return()=>{
            console.log("USEEFFECT")
            setPost(value)
            localStorage.setItem('post', JSON.stringify(post));
            console.log("done")
        }
    }, [value,post]);

    const arrayForUser = [1, 2, 3]


    return (
        <div className='feed'>
            {/* {show ? <PostModel/> : null} */}
            <div className='feed_left'>
                {/* <div className='stories'></div> */}
                <AddPost />
                <div className='feed_contents'>
                    {
                        post.map((el, index) => (
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
