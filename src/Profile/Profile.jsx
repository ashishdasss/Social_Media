import React from 'react'
import './Profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"
import TwitterIcon from "@mui/icons-material/Twitter"
import PlaceIcon from "@mui/icons-material/Place"
import LanguageIcon from "@mui/icons-material/Language"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Posts from "../../src/Component/posts/Posts"

// proffile states 
const Profile = () => {
  return (
    <div className='profile'>
      <div className='image'>
           
        <img src='https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' className='cover'/>
        <img src='https://images.pexels.com/photos/1420405/pexels-photo-1420405.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='profilePic'/>
      </div>
      <div className='profileContainer'>
    <div className="uInfo">
      <div className="left">
        <a href='https://www.facebook.com/'>
          <FacebookTwoToneIcon fontSize='medium'/>
        </a>
        <a href='https://www.instagram.com/'>
          <InstagramIcon fontSize='medium'/>
        </a>
        <a href='https://twitter.com/home'>
          <TwitterIcon fontSize='medium'/>
        </a>
        <a href='https://www.linkedin.com/feed/'>
          <LinkedInIcon fontSize='medium'/>
        </a>
        <a href='https://in.pinterest.com/'>
          <PinterestIcon fontSize='medium'/>
        </a>
      </div>
      <div className="center">
        <span>Ashish </span>
          <div className="info">
            <div className="item">
              <PlaceIcon/>
              <span>INDIA</span>
            </div>
            <div className="item">
              <LanguageIcon/>
              <span>Khalo.com</span>
            </div>
              
          </div>
          <button>follow</button>
      </div>
      <div className="right">
        <EmailOutlinedIcon/>
        <MoreVertIcon/>
      </div>
    </div>
      <Posts />
      </div>
    </div>
  )
}
export default Profile
