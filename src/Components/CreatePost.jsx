import React, { useState } from "react";
import AddPost from "./AddPost";

import "../styles/CreatePost.css";

export default function CreatePost() {
  const [posts, setPosts] = useState([]);

  // Function to add new post
  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]); // Adds new post at the top
  };

  return (
    <div>
      <h1 className="app-title">Instagram Clone</h1>
      <AddPost onAddPost={handleAddPost} />

      {/* Post Feed */}
      <main>
        <div className="Container-Post">
          <div className="Feeds">
            {posts.length === 0 ? (
              <p className="no-posts">No posts yet. Create your first post!</p>
            ) : (
              posts.map((post, index) => (
                <div key={index} className="Feed">
                  <div className="Head">
                    <div className="User">
                      <div className="Profile-Photo">
                        <img className="Profile-img" src="" alt="User" />
                      </div>
                      <div className="Info">
                        <h3>{post.username || "Lena Rose"}</h3>
                        <small>{post.location || "Dubai, 15 MINUTES AGO"}</small>
                      </div>
                    </div>
                    <div className="Photo">
                      <img className="First-Post" src={post.image} alt="Post" />
                      <p className="Post-text">{post.caption}</p>
                    </div>

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

                    <div className="like-by">
                      <p>
                        Liked by <b>Criss Morris</b> and <b>2,232 others</b>
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>Jos Buttler</b> Something Crazy..
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}