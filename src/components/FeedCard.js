import React from 'react'
// import PostModel from './PostModel';
import { ReactComponent as DotIcon } from "../assets/svg/dot.svg";
import { ReactComponent as HeartIcon } from "../assets/svg/Heart.svg";
import { ReactComponent as HeartActiveIcon } from "../assets/svg/heartActive.svg";
import { ReactComponent as CommentIcon } from "../assets/svg/comment.svg";
import { ReactComponent as ShareIcon } from "../assets/svg/share.svg";
import { ReactComponent as SaveIcon } from "../assets/svg/save.svg";
import { ReactComponent as CommentEmojiIcon } from "../assets/svg/commentemoji.svg";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CHANGELIKE } from '../redux/actions/postActions';

const FeedCard = ({ post }) => {
    const { id, userName, like, likes, desc, comments, time } = post;
    const dispatch = useDispatch();
    return (
        <div className='feed_card'>
            <div className='header'>
                <div className='header_icon'>
                    <img src="http://unsplash.it/32/32?gravity=center" alt="" />
                    <h3>
                        {/* programminghub_app_official */}
                        {userName}
                    </h3>
                </div>
                <DotIcon onClick={()=>console.log("clicked")}/>
                {/* <PostModel /> */}
            </div>
            <div className='main'>
                <img src="http://unsplash.it/470/570?gravity=center" alt="" />
            </div>
            <div className='footer'>
                <div className='footer_icons'>
                    <div className='footer_icons_left'>
                        <div className='heart-icon' onClick={() => dispatch(CHANGELIKE(id))}>
                            {like ? <HeartActiveIcon /> : <HeartIcon />}
                        </div>
                        <CommentIcon />
                        <ShareIcon />
                    </div>
                    <SaveIcon />
                </div>
                <div className='like_counts'>
                    <p>{likes} Likes</p>
                </div>
                <div className='post_desc'>
                    <p>
                        <Link to="">{userName}</Link> {desc}
                    </p>
                </div>
                <div className='view_comments'>
                    <p>{comments.length}</p>
                </div>
                <div className='time'>
                    {time}
                </div>
            </div>
            <div className='comments'>
                <div className='commets_left'>
                    <CommentEmojiIcon />
                    <input placeholder='Add a comment...' />
                    <Link to="">Post</Link>
                </div>
            </div>
        </div>
    )
}

export default React.memo(FeedCard);