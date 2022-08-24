import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const loadScript = (src) =>
    new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve()
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = (err) => reject(err)
        document.body.appendChild(script)
    })

const GoogleAuth = () => {
    const [user, setUser] = useState({});
    const googleButton = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const src = 'https://accounts.google.com/gsi/client'
        const id = "198144647780-6o3mqlqfjbeeksv3qi5qhv54idtkqesg.apps.googleusercontent.com"

        loadScript(src)
            .then(() => {
                /*global google*/
                google.accounts.id.initialize({
                    client_id: id,
                    callback: handleCredentialResponse,
                })
                google.accounts.id.renderButton(
                    googleButton.current,
                    { theme: 'outline', size: 'large' }
                )
            })
            .catch(console.error)

        return () => {
            const scriptTag = document.querySelector(`script[src="${src}"]`)
            if (scriptTag) document.body.removeChild(scriptTag)
        }
    }, [])

    function handleCredentialResponse(response) {
        let userObject = jwt_decode(response.credential);
        setUser(userObject);
        localStorage.setItem('user', JSON.stringify(userObject));
        navigate('/', { replace: true });
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