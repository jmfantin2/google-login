import Routes from './Routes'
import GoogleTokenProvider from './context/GoogleToken'

function App() {
  return (
    <>
      <GoogleTokenProvider>
        <Routes/>
      </GoogleTokenProvider>
    </>
  );
}

export default App;
