import React, { useState, useRef } from "react";
import "../styles/AddPost.css";

export default function AddPost() {
  const [posts, setPosts] = useState([]);
  const fileInputRef = useRef(null);

  // Function to open file dialog
  const handleCreatePost = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      // Prompt user for other details
      const username = prompt("Enter your name:", "Lena Rose");
      const location = prompt("Enter location:", "Dubai");
      const caption = prompt("Enter caption:", "Hello, world!");

      const newPost = {
        id: Date.now(),
        profilePic: "https://via.placeholder.com/40", // Placeholder profile image
        username: username || "Anonymous",
        location: location || "Unknown",
        imageUrl,
        caption: caption || "",
        likes: Math.floor(Math.random() * 1000), // Random likes
      };

      setPosts([newPost, ...posts]);
    }
  };

  return (
    <main>
      <div className="Container-Post">
        {/* Create Post Button */}
        <button className="create-post-btn" onClick={handleCreatePost}>
          Create Post
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* Posts Feed */}
        <div className="Feeds">
          {posts.map((post) => (
            <div className="Feed" key={post.id}>
              <div className="Head">
                <div className="User">
                  <div className="Profile-Photo">
                    <img className="Profile-img" src={post.profilePic} alt="User" />
                  </div>
                  <div className="Info">
                    <h3>{post.username}</h3>
                    <small>{post.location}, Just now</small>
                  </div>
                </div>
              </div>

              {/* Post Image & Caption */}
              <div className="Photo">
                <img className="First-Post" src={post.imageUrl} alt="Post" />
                <p className="Post-text">{post.caption}</p>
              </div>

              {/* Like, Comment & Share Buttons */}
              <div className="action-buttons">
                <div className="interaction-buttons">
                  <span>
                    <i className="Like bi bi-heart"></i>
                  </span>
                  <span>
                    <i className="bi bi-chat"></i>
                  </span>
                  <span>
                    <i className="bi bi-share"></i>
                  </span>
                </div>
              </div>

              {/* Likes & Comments */}
              <div className="like-by">
                <p>
                  Liked by <b>Random User</b> and <b>{post.likes} others</b>
                </p>
              </div>
              <div>
                <p>
                  <b>Jos Buttler</b> Something Crazy..
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}