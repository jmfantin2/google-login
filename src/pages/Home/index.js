import logo from '../../logo.svg';

//import {useGoogleToken} from '../../context/GoogleToken'

function Home({location}) {
   
  //const {googleToken} = useGoogleToken();
  return (
      <>
					{localStorage.getItem('token') ? (
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
					<p>GT: {localStorage.getItem('token')}</p>
      </>
  )
}

export {Home}