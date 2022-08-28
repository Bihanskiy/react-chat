import { useEffect, useRef} from 'react';
import jwt_decode from "jwt-decode";

import { loginButtonFeatures } from '../../utils/loginButtonFeatures.js';
import { useNavigate } from 'react-router-dom';

import { GOOGLE_KEY, URL } from './Keys';

const loadScript = (src) =>
    new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = (err) => reject(err)
        document.body.appendChild(script)
    })

const GoogleAuth = () => {
    const googleButton = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const src = URL;
        const id = GOOGLE_KEY;

        if (document.querySelector(`script[src="${src}"]`)) return;

        loginButtonFeatures(loadScript, googleButton, src, id, handleCredentialResponse)

        return () => {
            const scriptTag = document.querySelector(`script[src="${src}"]`)
            if (scriptTag) document.body.removeChild(scriptTag)
        }
    }, [])

    function handleCredentialResponse(response) {
        let userObject = jwt_decode(response.credential);
        localStorage.setItem('user', JSON.stringify(userObject));
        navigate('/react-chat', { replace: true });
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <h1 className='login__title'>Sign In</h1>
                <div ref={googleButton} className="login__button"></div>
            </div>
        </div>
    )
}

export default GoogleAuth;