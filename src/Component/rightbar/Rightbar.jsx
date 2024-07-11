import React from 'react'
import './Rightbar.scss'
// right hand side of the home page refered to right of bar in the conext  
 const Rightbar = () => {
  return (
    
    <div className='rightbar'>
      <div className="container">
        <div className='item'>
        <span>Suggestions For You</span>
        <div className='user'>
          <div className='userinfo'>
            <img src='https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <span>Jan Doe</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>
        <div className='user'>
          <div className='userinfo'>
            <img src='https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <span>Jan Doe</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>
        </div>
      <div className="item">
          <span>Latest Activities</span>
          <div className='user'>
          <div className='userinfo'>
            <img src='https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <p>
            <span>
              Samyak Jain 
              changed profile
            </span> 
            
            </p>
          </div>
          <span> 1 minute ago</span>
        </div>
        <div className='user'>
          <div className='userinfo'>
            <img src='https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <p>
            <span>
              Ayush Purohit
              changed profile
            </span> 
            </p>
          </div>
          <span> 1 minute ago</span>
        </div>
        <div className='user'>
          <div className='userinfo'>
            <img src='https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <p>
            <span>
              Chinamy Nagda 
              changed profile
            </span> 
            
            </p>
          </div>
          <span> 1 minute ago</span>
        </div>
        <div className='user'>
          <div className='userinfo'>
            <img src='https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <p>
            <span>
              Naman Verma 
              changed profile
            </span> 
            </p>
          </div>
          <span> 1 minute ago</span>
        </div>
        
        </div>
        <div className="item">
          <span>Online freinds</span>
          <div className='user'>
          <div className='userinfo'>
            <img src='https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <div className='online'/>
            <span>Shashank Sanganeria</span> 
          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}
export default Rightbar