import Routes from './Routes'
import GoogleAuthProvider from './context/GoogleAuth'

function App() {
  return (
    <>
      <GoogleAuthProvider>
        <Routes/>
      </GoogleAuthProvider>
    </>
  );
}

export default App;
