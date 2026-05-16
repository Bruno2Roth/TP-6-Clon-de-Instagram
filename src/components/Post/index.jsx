import React, { useState } from 'react';
import { Heart, MessageCircle, Send } from 'lucide-react';
import './Post.css';

const Post = ({ imageUrl, username, onClick }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post-card" onClick={onClick}>
      <img src={imageUrl} alt="Cat post" className="post-image" />

      <div className="post-overlay">
        <div className="post-user">
          <img
            src={`https://i.pravatar.cc/150?u=${username}`}
            alt="avatar"
            className="mini-avatar"
          />

          <span>@{username}</span>
        </div>

        <div className="post-actions">
          <Heart
            size={20}
            fill={liked ? "#ff007a" : "transparent"}
            color={liked ? "#ff007a" : "white"}
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
          />

          <MessageCircle size={20} />
          <Send size={20} />
        </div>
      </div>
    </div>
  );
};

export default Post;