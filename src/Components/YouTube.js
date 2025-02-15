import React from 'react'
import './YouTube.css'


import YoutubeChart1 from './YoutubeChart1'
import YoutubeChart2 from './YoutubeChart2'


function YouTube() {

    return (
        <div>
            {/* <div className='p-2 m-4' style={{ "backgroundColor": "lightgray" }}> */}

            <div className=' container-fluid bg-light' style={{ "height": "80px" }}>
                <div id='hello' className='d-flex text-center'>
                    <img src='./assets/pg1.png' alt='no img' className='pb-4 ms-3' style={{ "height": "100px" }} />
                    <h1 className='text-center'><b>YouTube</b></h1>
                </div>
            </div>

            <div className='hello container-fluid d-flex' data-bs-toggle="tooltip" data-bs-placement="top" title="Followers">
                <div className='upper container bg-white mt-2 ms-2 p-3 rounded-3 '>
                    <p className='fw-bold fs-4 mb-0 ms-4'>YOUTUBE</p>
                    <div className='d-flex'>
                        <img src='./assets/pg1.png' className='pt-0 mt-0' style={{ "height": "90px" }} />
                        <div className='ms-4'>
                           <h1>120.6<small>k</small></h1>
                            <h6>Followers</h6>
                        </div>
                    </div>
                </div>

                <div className=' upper bg-white ms-2 rounded-3 p-3 ' data-bs-toggle="tooltip" data-bs-placement="top" title="Followers">
                    <div className=' d-flex ms-5'>
                        <img src="./assets/img1.png" className='mt-2' data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" alt='no img' style={{ "height": "40px" }} />
                        <div className='ms-3'>
                            <h2>20,154</h2>
                            <p className='mb-0'>Followers</p>
                            <p>462%+ This week</p>
                        </div>
                    </div>
                </div>

                <div className='upper bg-white ms-2 rounded-3 p-3 p-3 ' data-bs-toggle="tooltip" data-bs-placement="top" title="Account Reached">
                    <div className='d-flex ms-5'>
                        <img className='mt-1 me-2' src='./assets/reach.png' alt='no img' style={{ "height": "60px" }} />

                        <div className='ms-3'>
                            <h2>1,73,035</h2>
                            <p className='mb-0'>Account Reached</p>
                            <p>58%+ This week</p>
                        </div>
                    </div>
                </div>

                <div className='upper bg-white ms-2 rounded-3 p-3' data-bs-toggle="tooltip" data-bs-placement="top" title="people Aangaged">
                    <div className='d-flex ms-5'>
                        <img className='mt-0' src='./assets/env1.png' alt='no img' style={{ "height": "50px" }} />

                        <div className='ms-3'>
                            <h2>62,986</h2>
                            <p className='mb-0'>People Anagaged</p>
                            <p>462%+ This week</p>
                        </div>
                    </div>
                </div>

            </div>
            

            <div className=' container-fluid d-flex mt-3 rounded-3' style={{ "height": "670px" }}>

                <div className='graph bg-white ms-0' style={{ "height": "600px", "width": "65%" }}>
                    <h4 className='bg-danger bold p-2' >Monthly View</h4>
                    <h5 className='ms-0 mt-4 '>Total view</h5>
                    <div className='new-chart m-5 p-5'>
                    <YoutubeChart2/>
                    </div>


                </div>

                <div className='graph bg-white ms-3 mt-0 me-0 rounded-3' style={{ "height": "600px", "width": "33%" }}>
                    <h4 className='bg-danger bold p-4'>Engagement Distribution</h4>
                    <div>
                    <YoutubeChart1/>
                       
                    </div>
                </div>
            </div>

            <div className='container-fluid d-flex '>
                <div className='lower container'>
                    <h4 className='head pt-2 pb-2'>Traffic Source</h4>
                    <ul class="list-group">
                        <li class="list-group-item">Youtube advertising</li>
                        <li class="list-group-item">Unknown Embeded Player</li>
                        <li class="list-group-item">Unknow-Direct</li>
                        <li class="list-group-item">External Website</li>
                        <li class="list-group-item">YouTube Suggested Video</li>
                        
                    </ul>
                </div>

                <div className='lower container'>
                    <h2 className='head pt-2 pb-2'>Views</h2>
                    <ul class="list-group">
                        <li class="list-group-item">15,850(90%)</li>
                        <li class="list-group-item">356(2.5%)</li>
                        <li class="list-group-item">320(2.6%)</li>
                        <li class="list-group-item">92(0.5%)</li>
                        <li class="list-group-item">86(1.4%)</li>
                        
                    </ul>
                </div>

                <div className='lower container'>
                    <h2 className='head pt-2 pb-2'>Estimated Mintues</h2>
                    <ul class="list-group">
                        <li class="list-group-item">8,850(96%)</li>
                        <li class="list-group-item">656(4.5%)</li>
                        <li class="list-group-item">420(2.6%)</li>
                        <li class="list-group-item">90(1.5%)</li>
                        <li class="list-group-item">86(1.4%)</li>
                        
                    </ul>
                </div>

            </div>


        </div>
        // </div>

    )
}

export default YouTube
