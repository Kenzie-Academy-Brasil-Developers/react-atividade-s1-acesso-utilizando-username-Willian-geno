import { useState } from 'react';
import './App.css';
import GetUserComponent from './components/GetUserComponent/GetUserComponent';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState (false);
  const [user, setuser] = useState(""); 
  return (
    <div className="App">
      <div className="App-header">
        {isLoggedIn ?(
          <WelcomePage user = {user} setIsLoggedIn = {setIsLoggedIn} />
        ):(
          <GetUserComponent setUser = {setuser} setIsLoggedIn = {setIsLoggedIn}/>
        )}
      </div>
    </div>
  );
}

export default App;
