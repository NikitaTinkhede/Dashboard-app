// import React, { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { FaBars, FaMoon, FaBriefcase, FaLinkedin, FaUserCircle } from "react-icons/fa";
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// import BarGraph from './BarGraph';
// import DemoSlider from './DemoSlider';
// import "./Dashboard.css";
// import DashboarSecbarChar from './DashboarSecbarChar';

// const Dashboard = () => {


//     const [showSidebar, setShowSidebar] = useState(false);
//     const toggleSidebar = () => setShowSidebar(!showSidebar);
  
  
//     return (
//       <div>
//         <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between">
            
//             <FaBars className="icon text-white ml-2 mr-3" size={24} onClick={toggleSidebar} style={{ cursor: "pointer" }} />
//             <h4 className="navbar-brand text-white">Social Media Dashboard</h4>
//             <div className="d-flex align-items-center gap-3 text-white mr-3 ml-3">
//               <FaMoon className="icon" size={24} />
//               <FaUserCircle className="icon" size={24} />
//             </div>
//           </nav>
          
//         </div>
//         <div className={offcanvas offcanvas-start ${showSidebar ? 'show' : ''}} style={{ visibility: showSidebar ? 'visible' : 'hidden' }}>
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title">Social Links</h5>
//           <button type="button" className="btn-close" onClick={toggleSidebar}></button>
//         </div>
//         <div className="offcanvas-body">
//           <a> Instagram</a>
//           <a> YouTube </a>
//           <a> Linkedln</a>
//           <a> Twitter</a>
//           <a> Facebook</a>
//           <a> Naukri</a>
//         </div>
//       </div>

//       <div className="container mt-4">
//   <div className="row">
//     <div className="col-md-4 mb-4 ">
//       <div className="card text-center p-3">
//           <FaFacebook size={40} color="#3b5998" />
//         <h5>@username</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaInstagram size={40} color="#E4405F" />
//         <h5>@username</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaYoutube size={40} color="#FF0000" />
//         <h5>@username</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaTwitter size={40} color="#1DA1F2" />
//         <h5>@username</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaLinkedin size={40} color="#0077B5" />
//         <h5>@username</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaBriefcase size={40} color="#555" />
//         <h5>@username</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>
//   </div>

// <div className="graph-container"></div>
// <BarGraph/>
// <DashboarSecbarChar/>

// </div>
// <h3 className="mt-4">Overview - Today</h3>
//          <div className="row">
//     <div className="col-md-4 mb-4 ">
//       <div className="card text-center p-3">
//           <FaFacebook size={40} color="#3b5998" />
//         <h5>Facebook Pages</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaInstagram size={40} color="#E4405F" />
//         <h5>Instagram</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaYoutube size={40} color="#FF0000" />
//         <h5>@username</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaTwitter size={40} color="#1DA1F2" />
//         <h5>Overview</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaLinkedin size={40} color="#0077B5" />
//         <h5>Linkedin Company</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>

//     <div className="col-md-4 mb-4">
//       <div className="card text-center p-3">
//         <FaBriefcase size={40} color="#555" />
//         <h5>@username</h5>
//         <p className="display-6">1987</p>
//         <p>FOLLOWERS</p>
//         <p className="positive">+12 Today</p>
//       </div>
//     </div>
//   </div>
// <DemoSlider/>
// </div>
//     </div>
//   )
// }

// export default Dashboard