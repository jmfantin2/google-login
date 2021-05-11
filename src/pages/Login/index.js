import {GoogleBtn} from '../../components/GoogleBtn';
import {Link} from 'react-router-dom';

function Login() {
  return( 
    <>
      <GoogleBtn/>
      <span>
        <Link to="/home">Ir à Home</Link>
      </span>
    </>
  )
}

export {Login}