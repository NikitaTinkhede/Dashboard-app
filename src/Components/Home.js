import React from 'react'
import './Home.css'
import { FaSearch } from 'react-icons/fa'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import InstaStories from './InstaStories';

import Logo from '../assets/Logo.png';
import box6_image from '../assets/box6_image.jpg';
import box7_image from '../assets/box7_image.jpg';
import Post2_image from '../assets/Post2_image.jpg';
import Post3_image from '../assets/Post3_image.jpg';
// import box4_image from '../assets/box4_image.jpg';

import "bootstrap-icons/font/bootstrap-icons.css";
import { FormGroup } from 'react-bootstrap';
import CreatePost from './CreatePost';


function Home() {
    return (
        <div>
            <div className='main'>

                {/* navbar */}
                <nav className="nav-container">
                        <ol className="navbar">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <a  className="nav-link "href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#">DashBoard</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#">Setting</a>
                            </li> 
                            <div className="search">
                      <input type="text" className="search-input" placeholder="Search..."/>
                      <span className="search-icon">🔍</span>
                    </div>
                          
                            <li className="nav-item">
                            <img className="Profile-img" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                           
                            </li>
                        </ol>
                    </nav>



                <div className='box'>
                    <div className='innerbox'>
                        <div className='story d-flex'>
                            <FontAwesomeIcon icon={faPlus} size="lg" className='bg-light rounded-circle' />;
                            <InstaStories />
                        </div>
                         <div>
                          <CreatePost/>
                         </div>

                        <div className='postFormContainer'>
                        <form className="postForm">
                          <div className="user form-top">
                         
                            <input className='Post-input' type="text" placeholder="What's on your mind ?" />
                            <button type='submit' className='input-button btn btn-primary'>Post</button>
                          </div>
        
                    
                          <div className="post-categories">
                            <label htmlFor="file">
                              <input type="file" />
                            </label>
                            
                            
                             
                            
                          </div>
                        </form>
                    
                  
                        {/* ////////////Feed//////////// */}
                        <main>
                        <div className='Container-Post'>
                     
                        <div className='Feeds'>
                          <div className='Feed '>
                            <div className='Head'>
                              <div className='User'>
                                <div className='Profile-Photo'>
                                    <img className='Profile-img' src={Logo} />
                                </div>
                                <div className='Info'>
                                <h3>Lena Rose</h3>
                                <small>Dubai, 15 MINUTES AGO</small>
                                </div>
                    
                              </div>
                              <div className='Photo'>
                              <img className='First-Post' src={box6_image} />
                              
                              <p className='Post-text'>Hi, folks 👋 This is my Exploration about Creative digital agency called Booster Agency.  👇</p>
                              </div>
                    
                              <div className="action-buttons">
                                <div className="interaction-buttons">
                                  <span><i className="Like bi bi-heart"></i></span>
                                  <span><i className="bi bi-chat"></i></span>
                                  <span><i className="bi bi-share"></i></span>
                                </div>
                    
                              </div>
                    
                              <div className='like-by'>
                              <p>Liked by <b>Criss Morris</b> and <b>2,232 others</b></p>
                              </div>
                            <div>
                              <p><b>Jos Buttler</b> Something Crazy..</p>
                            </div>
                            </div>
                          </div>
                        </div>
                        </div>
                    
                        </main>
                    
                    
                    
                        <main>
                        <div className='Container-Post'>
                     
                        <div className='Feeds'>
                          <div className='Feed '>
                            <div className='Head'>
                              <div className='User'>
                                <div className='Profile-Photo'>
                                    <img className='Profile-img' src={Logo} />
                                </div>
                                <div className='Info'>
                                <h3>Lena Rose</h3>
                                <small>Dubai, 15 MINUTES AGO</small>
                                </div>
                    
                              </div>
                              <div className='Photo'>
                              <img className='First-Post' src={box7_image} />
                              <p className='Post-text'>Hi, folks 👋 This is my Exploration about Creative digital agency called Booster Agency.  👇</p>
                              </div>
                    
                              <div className="action-button">
                                <div className="interaction-buttons">
                                <span><i className="Like bi bi-heart"></i></span>
                                  <span><i className="bi bi-chat"></i></span>
                                  <span><i className="bi bi-share"></i></span>
                                </div>
                    
                              </div>
                    
                              <div className='like-by'>
                              <p>Liked by <b>Criss Morris</b> and <b>2,232 others</b></p>
                              </div>
                            <div>
                              <p><b>Jos Butller</b> Something Crazy..</p>
                            </div>
                            </div>
                          </div>
                        </div>
                        </div>
                    
                        </main>
                    
                    
                    
                        <main>
                        <div className='Container-Post'>
                     
                        <div className='Feeds'>
                          <div className='Feed '>
                            <div className='Head'>
                              <div className='User'>
                                <div className='Profile-Photo'>
                                    <img className='Profile-img' src={Logo} />
                                </div>
                                <div className='Info'>
                                <h3>Lena Rose</h3>
                                <small>Dubai, 15 MINUTES AGO</small>
                                </div>
                    
                              </div>
                              <div className='Photo'>
                              <img className='First-Post' src={Post2_image} />
                              <p className='Post-text'>Hi, folks 👋 This is my Exploration about Creative digital agency called Booster Agency.  👇</p>
                              </div>
                    
                              <div className="action-button">
                                <div className="interaction-buttons">
                                <span><i className="Like bi bi-heart"></i></span>
                                  <span><i className="bi bi-chat"></i></span>
                                  <span><i className="bi bi-share"></i></span>
                                </div>
                    
                              </div>
                    
                              <div className='like-by'>
                              <p>Liked by <b>Criss Morris</b> and <b>2,232 others</b></p>
                              </div>
                            <div>
                              <p><b>Jos Butller</b> Something Crazy..</p>
                            </div>
                            </div>
                          </div>
                        </div>
                        </div>
                    
                        </main>
                    
                    
                    
                        <main>
                        <div className='Container-Post'>
                     
                        <div className='Feeds'>
                          <div className='Feed '>
                            <div className='Head'>
                              <div className='User'>
                                <div className='Profile-Photo'>
                                    <img className='Profile-img' src={Logo} />
                                </div>
                                <div className='Info'>
                                <h3>Lena Rose</h3>
                                <small>Dubai, 15 MINUTES AGO</small>
                                </div>
                    
                              </div>
                              <div className='Photo'>
                              <img className='First-Post' src={ Post3_image} />
                              <p className='Post-text'>Hi, folks 👋 This is my Exploration about Creative digital agency called Booster Agency.  👇</p>
                              
                              </div>
                    
                              <div className="action-button">
                                <div className="interaction-buttons">
                                <span><i className="Like bi bi-heart"></i></span>
                                  <span><i className="bi bi-chat"></i></span>
                                  <span><i className="bi bi-share"></i></span>
                                </div>
                    
                              </div>
                    
                              <div className='like-by'>
                              <p>Liked by <b>Criss Morris</b> and <b>2,232 others</b></p>
                              </div>
                            <div>
                              <p><b>Jos Butller</b> Something Crazy..</p>

                              
                            </div>
                            </div>
                          </div>
                        </div>
                        </div>
                    
                        </main>
                    
                    
                    
                        </div>

                        
                    </div>

                   

                </div>
                
                <div>
                  
                </div>
            </div>

                    </div>
 )
}

export default Home;