import logo from '../../logo.svg';

import GoogleTokenProvider from '../../context/GoogleToken';
import {useGoogleToken} from '../../context/GoogleToken'

function Home({location}) {
   
  const {googleToken} = useGoogleToken();
  return (
      <>
				<GoogleTokenProvider>
					{googleToken === '' ? (
						<div>
							<p>Você precisa se logar primeiro</p>
						</div>
					) : (
						<div>
							<div className='nav'>
									<div className='profile'>
											<div className='name'>DUMMY</div>
									</div>
									<div className='signout'>
											<p className='link'>Sign out</p>                  
									</div>
							</div>
							<div className='body'>
									<img src={logo} alt='logo'></img>
							</div>  
					</div>
					)}
				</GoogleTokenProvider>
      </>
  )
}

export {Home}