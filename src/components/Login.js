import React, { useRef, useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN } from '../redux/actions/loginActions';

export default function Login() {
    console.log("LOGIN")

    const dispatch = useDispatch();

    let navigate = useNavigate();
    const errorDiv = useRef();

    const [formData, setFormData] = useState({
        user: '',
        password: ''
    });

    const changeHandler = event => {
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
        if (formData.user === "test" && formData.password === "test"){
            dispatch(LOGIN())
            navigate("/", { replace: false })
        }
        else
            errorDiv.current.innerHTML = 'There was a problem logging you into Instagram. Please try again soon.';
    }


    return (
    <div className='login_page'>
            <div className='login_page_container' >
                <div className='white_box'>
                    <img className='logo'
                        src='https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png'
                        alt='insta-logo'
                    />
                    <form method='post' onSubmit={submitHandler}>
                        <input placeholder='Phone number, username or email address' name="user" onChange={changeHandler} />
                        <input type='password' placeholder='Password' name='password' onChange={changeHandler} />
                        <button type='submit'>Log in</button>
                        <div className='or'>OR</div>
                        <div className='liwf'><a href='https://www.facebook.com'>Log in with Facebook</a></div>
                        <div className='error_message' ref={errorDiv} ></div>
                        <div className='fb'><a href='/forgot'>Forgotten your password?</a></div>
                    </form>
                </div>
                <div className='signup-box'>Don't have an account? <Link to="/signup">Sign up</Link></div>
                <div className='gta'>
                    <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png' alt='playstore'></img>
                    <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png' alt='appstore'></img>
                </div>
            </div>
        </div>
    )
}
