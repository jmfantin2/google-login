import logo from '../../logo.svg';

import {useGoogleAuth} from '../../context/GoogleAuth'

function Home({location}) {
   
  const {googleToken} = useGoogleAuth();
  return (
      <>
					{googleToken ? (
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
					) : (
						<div>
							<p>Você precisa se logar primeiro</p>
						</div>
					)}
					<p>googleToken: {googleToken}</p>
      </>
  )
}

export {Home}