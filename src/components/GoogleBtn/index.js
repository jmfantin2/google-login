import { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import { useGoogleToken } from '../../context/GoogleToken'


const CLIENT_ID = '758963107546-ekp2ltbr0pd3dic0re9njpm7coqkhurr.apps.googleusercontent.com';


function GoogleBtn () {

  const [ isLogined, setIsLogined ] = useState(false);
  /**
   * OBSERVAÇÃO: isLogined só vai funcionar como o esperado
   * quando houver comunicação com o backend, responsável por
   * persistir o login. Front não persiste sessão sozinho.  
   */

  // const { googleToken, setGoogleToken } = useGoogleToken();
  /**
   * DEPRECATED
   * Não é dever da Context API, ou do frontend, persistir 
   * dados de login, como o Token, nesse caso.
   * 
   * A fins de workaround será utilizado o "localStorage", do JS.
   */

  const login = (response) => {
    if(response.accessToken){
        setIsLogined(true);
        //setGoogleToken(response.accessToken);
        localStorage.setItem('token', response.accessToken);
    };
  }
  
  const logout = (response) => {
      setIsLogined(false);
      //setGoogleToken('');
      localStorage.setItem('token', null);
      console.log(localStorage.removeItem('token'));
  }

  const handleLoginFailure = (response) => {
    alert('Failed to log in')
  }

  const handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

    return (
      <div>
        { isLogined || localStorage.getItem('token')
           ?
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
        { localStorage.getItem('token') ? <h5>Your Access Token: <br/><br/> { localStorage.getItem('token') }</h5> : null }

      </div>
    )
}

export {GoogleBtn};