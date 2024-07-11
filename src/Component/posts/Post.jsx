import React, { useState } from "react";
import "../../Component/posts/Post.scss"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

const Post = ({post}) => {

    
        const [liked, setLiked] = useState(false);

        const handleClick = () => { 
            setLiked((prevLiked => !prevLiked))
        }


        const [commentsOpen, setCommentsOpen] = useState(false)
    
    return (
        <div className="post">
            <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.img}></img>
                    <div className="details">
                        <Link to ={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                            <span className="name">{post.name}</span>
                            <span className="date">1 min ago</span>
                        </Link>    
                    </div> 
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img}></img>
            </div>
            <div className="info">
                <div className="item">
                    <button onClick={handleClick}>
                    {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                    </button>
                    12 Likes  
                </div>
                <div className="item" onClick={()=>setCommentsOpen(!commentsOpen)}>
                    <TextsmsOutlinedIcon/>
                    12 Comments 
                </div>
                <div className="item">
                    <ShareOutlinedIcon/>
                    shared 
                </div>
            </div>
            {commentsOpen && <Comments/>}
            </div>
        </div>
    )
}
export default Post; 