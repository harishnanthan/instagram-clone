import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DELETEPOST } from '../redux/actions/postActions'
import { HIDEMODEL } from '../redux/actions/showActions';

function PostModel({ id }) {
  const postModel = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("COMPONENT DID MOUNT")
    return () => {
      console.log("COMPONENT WILL UNMOUNT")
      toast("POST DELETED")
    }
  }, [])

  return (
    <div className='postModel active' ref={postModel}>
      <div className='post__center'>
        <button className='postModel__delete' onClick={() => dispatch(DELETEPOST(id))}>Delete</button>
        <button className='postModel__close' onClick={() => dispatch(HIDEMODEL())}>Close</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default PostModel