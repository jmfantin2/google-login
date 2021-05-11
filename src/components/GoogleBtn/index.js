import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useGoogleAuth } from '../../context/GoogleAuth'


const CLIENT_ID = '758963107546-ekp2ltbr0pd3dic0re9njpm7coqkhurr.apps.googleusercontent.com';


function GoogleBtn () {

  const { googleToken, setGoogleToken } = useGoogleAuth();
  
    //const [ isLogined, setIsLogined ] = useState(false);
  /**
   * OBSERVAÇÃO: isLogined só vai funcionar como o esperado
   * quando houver comunicação com o backend, responsável por
   * persistir o login. Front não persiste sessão sozinho.  
   */

  const login = (response) => {
    if(response.accessToken){
        setGoogleToken(response.accessToken);
        //setGoogleSession(true);
        //localStorage.setItem('token', response.accessToken);
    };
  }
  
  const logout = (response) => {
      setGoogleToken(null);
      //setGoogleSession(false);
      //localStorage.removeItem('token', null);
  }

  const handleLoginFailure = (response) => {
    alert('Failed to log in')
  }

  const handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

    return (
      <div>
        { googleToken
           ?
          <GoogleLogout
            clientId={ CLIENT_ID }
            buttonText='Logout'
            onLogoutSuccess={ logout }
            onFailure={ handleLogoutFailure }
          >
          </GoogleLogout>
          : 
          <GoogleLogin
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