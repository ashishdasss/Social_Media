import React, { useContext } from 'react'
import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkContextMode }  from '../../Context/DarkContextMode';
import { AuthContext } from '../../Context/authContext';

// backened integration navbar contruction ,same with the toggle button
const Navbar = () => { 
    const {toggle, darkMode} = useContext( DarkContextMode)
    const {currentUser} = useContext( AuthContext )
  return (
    <div className='navbar'>
        <div className='left'>
            <Link to="/" style={{textDecoration:"none"}}>
            <span>lamasocial</span> 
            </Link>
            <HomeOutlinedIcon />
            { darkMode ? <DarkModeOutlinedIcon onClick={toggle}/> : <WbSunnyOutlinedIcon onClick={toggle}/>}
            <GridViewOutlinedIcon/>
            <div className='search'>
                <SearchOutlinedIcon />
                <input type='text' placeholder='Search'/>
            </div>
        </div>
        <div className='right'>
            <PersonOutlineOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/> 
            <div className='user'>
                <img src={currentUser.profilePic} alt=''/>
                <span>{currentUser.name}</span>
            </div>
        </div>   
    </div>
  )
}
export default Navbar
