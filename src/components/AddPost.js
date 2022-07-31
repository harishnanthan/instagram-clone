import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SHOWCREATEPOST } from '../redux/actions/postCreateAction';
import CreatePost from './CreatePost';

function AddPost() {
    // const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const show = useSelector(state => state.show)
    console.log(show)
  return (
    <div className='addpost'>
        <button onClick={()=> dispatch(SHOWCREATEPOST())}>Add post</button>
        {show.show ? <CreatePost/> : null}
    </div>
  )
}

export default AddPost