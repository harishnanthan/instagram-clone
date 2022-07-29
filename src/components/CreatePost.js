import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { CREATEPOST } from '../redux/actions/postActions';
import {ReactComponent as CloseIcon} from "../assets/svg/close.svg";
function CreatePost() {

    const dispatch = useDispatch()
    const [formData, setFromData] = useState({
        desc: ""
    })

    const [file, setFile] = useState()

    const changeHandler = e =>{
        const {name, value} = e.target;
        setFromData(prevData => {
            return{
                ...prevData,
                [name] : value
            }
        })
    }

    const changeImageHandler = e => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const submitHandler = e => {
        e.preventDefault();
        dispatch(CREATEPOST(formData.desc, file))
    }


    return (
        <div className='createpost'>
            <div className='createpost--close'>
                <CloseIcon/>
            </div>
            <form onSubmit={submitHandler} className='createpost__center'>
                <input type="file" name='post' onChange={changeImageHandler}/>
                <textarea name="desc" rows="4" cols="50" onChange={changeHandler}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreatePost