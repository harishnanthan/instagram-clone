import React, { useState } from 'react'
import CreatePost from './CreatePost';

function AddPost() {
    const [show, setShow] = useState(false);
  return (
    <div className='addpost'>
        <button onClick={()=> setShow(true)}>Add post</button>
        {show ? <CreatePost/> : null}
    </div>
  )
}

export default AddPost