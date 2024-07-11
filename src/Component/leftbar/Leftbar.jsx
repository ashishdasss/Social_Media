import React from 'react'
import './Leftbar.scss'
import Freinds from '../../assests/11.png'
import { Warehouse, WidthNormal } from '@mui/icons-material'
import Solo from '../../assests/2 (1).png'
import Market from '../../assests/3.png'
import Watch from '../../assests/4.png'
import Memories from '../../assests/13.png'
import Events from '../../assests/6.png'
import Gaming from '../../assests/7.png'
import Vedio from '../../assests/9.png'
import Message from '../../assests/10.png'
import Tutorial from '../../assests/4.png'
import Maps from '../../assests/map.png'

 const Leftbar = () => {
  return (  
    <div className='leftbar'>
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src={Freinds}/>
                    <span>John Doe</span>
                </div>
                <div className='items'>
                    <img src={Solo}  alt="" />
                    <span>Freinds</span>
                </div>
                <div className='items'>
                    <img src={Freinds}  alt="" />
                    <span>Groups</span>
                </div> 
                <div className='items'>
                    <img src={Market}  alt="" />
                    <span>Market</span>
                </div>
                <div className='items'>
                    <img src={Watch}  alt="" />
                    <span>Watch</span>
                </div>
                <div className='items'>
                    <img src={Memories}  alt="" />
                    <span>Memories</span>   
                </div>
                <div className='items'>
                    <img src={Events}  alt="" />
                    <span>Events</span>
                </div>
            </div>
            <hr/>
            <div className='menu'>
                <span>Your shortcuts</span>
                <div className="user">
                    <img src={Gaming}/>
                    <span>Gaming</span>
                </div>
                <div className='items'>
                    <img src={Vedio}  alt="" />
                    <span>Vedios</span>
                </div>
                <div className='items'>
                    <img src={Message}  alt="" />
                    <span>Messages</span>
                </div>
                <div className='items'>
                    <img src={Tutorial}  alt="" />
                    <span>Tutorials</span>
                </div>
                <div className='items'>
                    <img src={Maps}  alt="" />
                    <span>Maps</span>
                </div>
                <div className='items'>
                    <img src={Freinds}  alt="" />
                    <span>Fund</span> 
                </div>
                <div className='items'>
                    <img src={Freinds}  alt="" />
                    <span>Fund</span> 
                </div>
                <div className='items'>
                    <img src={Freinds}  alt="" />
                    <span>Fund</span> 
                </div>
                <div className='items'>
                    <img src={Freinds}  alt="" />
                    <span>Fund</span> 
                </div>
                <div className='items'>
                    <img src={Freinds}  alt="" />
                    <span>Fund</span> 
                </div>
                

            </div>
        </div> 
    </div>
  )
}
export default Leftbar
