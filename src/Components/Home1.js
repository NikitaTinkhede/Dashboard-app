import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
import { getHoverColor } from 'chart.js/helpers';
import React, { useState } from 'react'
import './Home1.css'
function Home1() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        alert(`Searching for: ${searchTerm}`);
        setSearchTerm("")
    };


    return (

        <div>

            <div style={styles.main} >
                {/* navbar */}
                <ul class="nav justify-content-between">
                    <a class="navbar-brand p-3" href="#">Sociallytics</a>

                    <div className='d-flex' style={{ "color": "black", "listStyleType": "none" }}>
                        <li class="nav-item text-light">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About-Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact-Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Track Social Media Activity</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Setting</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Logout</a>
                        </li>

                    </div>


                    {/* Search Box */}
                    <form onSubmit={handleSearch} style={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={styles.searchInput}
                        />
                        <button type="submit" style={styles.searchButton}>🔍</button>
                    </form>

                    <a style={styles.searchProfile}>
                        <img style={styles.searchImg} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                    </a>
                </ul>
            </div>

            {/*main page*/}
            <div style={pages.div}>

                {/* left page */}
                <div style={pages.content}>
                    <div className='justify-content-center mt-5 p-5 ms-3'>
                        <h2 className='text-dark'>Admin DashBoard
                            <br />
                            UI Kit
                        </h2>

                        <div className='ms-2 text-start fw-1' style={{ "listStyleType": 'none' }}>
                            
                                <li><span class="icon"></span> Item 1</li>
                                <li><span class="icon"></span> Item 2</li>
                                <li><span class="icon"></span> Item 3</li>
                                <li><span class="icon"></span> Item 4</li>
                         
                        </div>


                    </div>
                </div>

                {/* right page */}
                {/* <div style={pages.Img} >
                    <div style={pages.box}>
                        <img src="./assets/admin.png" alt="Image 1" style={pages.image1} />
                        <img src="./assets/admin.png" alt="Image 2"  style={pages.image2} />
                        <img src="./assets/admin.png" alt="Image 3"  style={pages.image3}/>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

const styles = {
    main: {
        backgroundColor: 'pink'
    },
    navbar: {
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
    },
    logo: {
        fontSize: '10px',
        fontWeight: 'bold',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    },
    searchInput: {
        height: '30px',
        marginLeft: '100px',
        padding: '5px',
        borderRadius: '15px',
        border: '2px solid blue',
        outline: 'none',
    },

    // searchInput:{
    //     border: 2px solid blue;
    // },

    searchButton: {
        padding: '5px 10px',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    navItems: {
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },

    // searchProfile:{
    //     border:'none',
    //     background:'none'
    // },

    searchImg: {
        // display:'flex',
        height: '60px',
        marginRight:'5px'
    }
};


const pages = {
    div: {
        width: '100%',
        height: '600px',
        backgroundColor: 'gray',

    },

    content: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

}
export default Home1
