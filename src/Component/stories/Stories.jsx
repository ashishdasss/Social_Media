import React, { useContext } from 'react'
import "./Stories.scss"
import { AuthContext } from '../../Context/authContext';

const Stories = () => {
    // Stories code can be encoded in their aand can be edidted below
    const {currentUser} = useContext(AuthContext)
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/17488879/pexels-photo-17488879/free-photo-of-mt-hood.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:2,
            name: "Ben Jordan",
            img: "https://images.pexels.com/photos/19570717/pexels-photo-19570717/free-photo-of-man-standing-with-arms-crossed-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:3,
            name: "Lucy Ben",
            img: "https://images.pexels.com/photos/4347260/pexels-photo-4347260.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ];
    return (
        <div className='stories'>
            <div className='story' alt=''>
                <img src={currentUser.profilePic} alt=''/>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story=>(
            <div className='story' alt=''>
                <img src={story.img} alt=''/>
                <span>{story.name}</span>
            </div>
            ))}
        </div>
    )
}
export default Stories;