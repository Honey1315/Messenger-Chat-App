
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login'
import Profile from './pages/Profile';
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/register' Component={Register}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path="/" element={<PrivateRoute/>}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    // <h1>Home</h1>
  );
}

export default App;
