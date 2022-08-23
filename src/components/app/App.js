import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import LeftColumnContacts from '../leftColumnContacts/LeftColumnContacts';
import RightColumnMessages from '../rightColumnMessages/RightColumnMessages';

import jwt_decode from "jwt-decode";
import { useEffect, useState} from 'react';

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(e) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    const google = window.google;
    google.accounts.id.initialize({
      client_id: "198144647780-6o3mqlqfjbeeksv3qi5qhv54idtkqesg.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, [])

  return (
    <div className="app left-column-open">
      <div id="signInDiv"></div>
      {
        Object.keys(user).length !== 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign out</button>
      }
      {Object.keys(user).length !== 0 &&
        <div>
          <img src={user.picture} alt="sd"></img>
          <h3>{user.name}</h3>
        </div>
      }
    </div>
    // <ErrorBoundary>
    //   <div className="app left-column-open">
    //       <LeftColumnContacts />
    //       <RightColumnMessages />
    //     </div>
    // </ErrorBoundary>
  );
}

export default App;
