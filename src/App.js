import { MainBody } from './components/main/MainBody';
import { MainHeader } from './components/main/MainHeader';

import { Login } from './components/login/Login';
import { LoginHeader } from './components/login/LoginHeader';
import { useSelector } from 'react-redux';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  
  return (
    <div className="App">
      {isAuth &&<MainHeader/>}
      {isAuth && <MainBody/>}
      {!isAuth && <LoginHeader/>}
      {!isAuth && <Login/>} 
    </div>
  );
}

export default App;
