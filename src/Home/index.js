import logo from '../logo.svg';

function Home({location}) {
   
  return (
      <>
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
      </>
  )
}

export {Home}