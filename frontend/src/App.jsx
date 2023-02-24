import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//pages + components
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from "./components/Header"



const App = () => {
  const {user} = useAuthContext();

  return (
    <div id='App' className='flex flex-col h-screen w-screen'>
      <BrowserRouter>
        <Header />
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/login'/>} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/"/>} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/>} />
          </Routes>
        </div>   
      </BrowserRouter>
    </div>
  )
}

export default App