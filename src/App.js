// import logo from './logo.svg';
import Leftbar from './Component/leftbar/Leftbar';
import Navbar from './Component/navbar/Navbar';
import Rightbar from './Component/rightbar/Rightbar';
import './style.scss'
// import Practice from './Home/Practice';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { 
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
}from "react-router-dom"; 
import Home from "./Home/Home"
import Profile from "./Profile/Profile"
import { useContext } from 'react';
import { DarkContextMode } from './Context/DarkContextMode';
import { AuthContext } from './Context/authContext';
function App() {
  const {currentUser} = useContext(AuthContext)
  // const {currentUser} = useContext(AuthContext);
  
  const {darkMode} = useContext(DarkContextMode)
  
  const Layout = () => {  
    return (
      //theme dark mode 
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display:"flex"}}>
          <Leftbar />
          <div style = {{flex:6}}>
          <Outlet />
          </div>
          
          <Rightbar />
        </div>
      </div>
    )
  }
  const ProtectedRoute = ({ children }) => { 
    if(!currentUser){
      return<Navigate to="/login"/>
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <ProtectedRoute >
        <Layout />
      </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<Profile />
        }
     ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
