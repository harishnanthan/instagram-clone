import React from 'react'
import { ReactComponent as DotIcon } from "../assets/svg/dot.svg";
import { ReactComponent as HeartIcon } from "../assets/svg/Heart.svg";
import { ReactComponent as CommentIcon } from "../assets/svg/comment.svg";
import { ReactComponent as ShareIcon } from "../assets/svg/share.svg";
import { ReactComponent as SaveIcon } from "../assets/svg/save.svg";
import { ReactComponent as CommentEmojiIcon } from "../assets/svg/commentemoji.svg";
import { Link } from 'react-router-dom';
export default function FeedCard() {
    return (
        <div className='feed_card'>
            <div className='header'>
                <div className='header_icon'>
                    <img src="http://unsplash.it/32/32?gravity=center" alt="" />
                    <h3>
                        programminghub_app_official
                    </h3>
                </div>
                <DotIcon />
            </div>
            <div className='main'>
                <img src="http://unsplash.it/470/570?gravity=center" alt="" />
            </div>
            <div className='footer'>
                <div className='footer_icons'>
                    <div className='footer_icons_left'>
                        <HeartIcon />
                        <CommentIcon />
                        <ShareIcon />
                    </div>
                    <SaveIcon />
                </div>
                <div className='like_counts'>
                    <p>147,411 Likes</p>
                </div>
                <div className='post_desc'>
                    <p>
                        <Link to="">programminghub_app_official</Link> Every brand needs an appealing user Interface design to stand out in the market and that's what we are here to do.⚡️
                    </p>
                </div>
                <div className='view_comments'>
                    <p>View all 2,345 comments</p>
                </div>
                <div className='time'>
                    1 DAY AGO
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
