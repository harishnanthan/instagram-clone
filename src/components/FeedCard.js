import React, { useRef, useState } from 'react'
import PostModel from './PostModel';
import { ReactComponent as DotIcon } from "../assets/svg/dot.svg";
import { ReactComponent as HeartIcon } from "../assets/svg/Heart.svg";
import { ReactComponent as HeartActiveIcon } from "../assets/svg/heartActive.svg";
import { ReactComponent as CommentIcon } from "../assets/svg/comment.svg";
import { ReactComponent as ShareIcon } from "../assets/svg/share.svg";
import { ReactComponent as SaveIcon } from "../assets/svg/save.svg";
import { ReactComponent as CommentEmojiIcon } from "../assets/svg/commentemoji.svg";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { ADDCOMMENT, CHANGELIKE } from '../redux/actions/postActions';
import { SHOWMODEL } from '../redux/actions/showActions';

const FeedCard = ({ post }) => {
    const postButton = useRef()
    const { id, userName, like, likes, desc, comments, time, img } = post;
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        comment: ''
    })
    const data = useSelector(state => state)
    const show = data.showModel.show;

    const changeHandler = event => {
        // console.log(postButton.current)
        // let val = formData.comment.length
        // console.log(val--)
        if(formData.comment.length >= 0)
            postButton.current.classList.add("colorPost")
        else   
            postButton.current.classList.remove("colorPost")

        const { name, value } = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const submitHandler = event => {
        event.preventDefault();
        postButton.current.classList.remove("colorPost")
        dispatch(ADDCOMMENT(id, formData.comment))

    }
    return (
        <div className='feed_card'>
            <div className='header'>
                <div className='header_icon'>
                    <img src={"http://unsplash.it/32/32?gravity=center"} alt="" />
                    <h3>
                        {/* programminghub_app_official */}
                        {userName}
                    </h3>
                </div>
                <DotIcon onClick={() => dispatch(SHOWMODEL())} />
                {/* {console.log(show)} */}
                {show ? <PostModel id={id} /> : null}
            </div>
            <div className='main'>
                <img src={img ? img : "http://unsplash.it/470/570?gravity=center"} alt="" />
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
                    {comments.map((el, index) => {
                        return <p key={index} className="comments" ><strong>harishnanthans</strong> {el}</p>
                    })}
                    <p>{comments.length}</p>
                </div>
                <div className='time'>
                    {time}
                </div>
            </div>
            <div className='comments'>
                <form onSubmit={submitHandler} className='commets_left'>
                    <CommentEmojiIcon />
                    <input placeholder='Add a comment...' name='comment' value={formData.comment} onChange={changeHandler} />
                    <button ref={postButton} type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}

// export default React.memo(FeedCard);
export default React.memo(FeedCard); 