import {GoogleBtn} from '../../components/GoogleBtn'

function Login() {
  return( 
    <>
      <GoogleBtn/>
      <button
        onClick={() => {
          window.location.href = '/home';
        }}
      >
        Go to Details
      </button>
    </>
  )
}

export {Login}