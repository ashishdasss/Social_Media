import React from "react";
import "./Comments.scss"

const Comments = () => {

    const comments = [
        {
          id: 1,
          name: "John Doe",
          userId: 1,
          profilePic:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          id: 2,
          name: "Jane Doe",
          userId: 2,
          profilePic:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
        },
      ];

      return(
        <div className="comments">
            {comments.map((comments)=> (
               <div className="comments">
                 <img src={comments.profilePic} alt=" "/>
                 <div className="info">
                    <span>{comments.name}</span>
                    <p>{comments.desc}</p>
                 </div>
                 <span className="date">1 hour ago</span>
               </div> 
            ))}

        </div>
      )
}
export default Comments

