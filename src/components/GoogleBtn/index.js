import { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useGoogleToken } from '../../context/GoogleToken'


const CLIENT_ID = '758963107546-ekp2ltbr0pd3dic0re9njpm7coqkhurr.apps.googleusercontent.com';


function GoogleBtn () {

  const [ isLogined, setIsLogined ] = useState(false);
  const { googleToken, setGoogleToken } = useGoogleToken();

  function login(response) {
    if(response.accessToken){
        setIsLogined(true);
        setGoogleToken(response.accessToken);
    };
  }
  
  const logout = (response) => {
      setIsLogined(false);
      setGoogleToken('');
  }

  const handleLoginFailure = (response) => {
    alert('Failed to log in')
  }

  const handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

    return (
      <div>
        { isLogined ?
          <GoogleLogout
            clientId={ CLIENT_ID }
            buttonText='Logout'
            onLogoutSuccess={ logout }
            onFailure={ handleLogoutFailure }
          >
          </GoogleLogout>: <GoogleLogin
            clientId={ CLIENT_ID }
            buttonText='Login'
            onSuccess={ login }
            onFailure={ handleLoginFailure }
            cookiePolicy={ 'single_host_origin' }
            responseType='code,token'
          />
        }
        { googleToken ? <h5>Your Access Token: <br/><br/> { googleToken }</h5> : null }

      </div>
    )
}

export {GoogleBtn};