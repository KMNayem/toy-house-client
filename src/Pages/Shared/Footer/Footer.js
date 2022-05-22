
import React from 'react'
import { NavLink } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
       <div className='container-fluid footer-details'>
           <div className='row g-6'>
               <div className='col-lg-6'>                
                    <h3 className='text-center mt-5'>Toy House</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='m-3'>
                            <NavLink>Home</NavLink>
                            <NavLink>About</NavLink>
                        </div>
                        <div>
                            <NavLink>Item</NavLink>
                            <NavLink>Contact</NavLink>
                        </div>
                    </div>
               </div>
               <div className='col-lg-6'>                
                    <h3 className='text-center mt-5'>About Toy House</h3>
                    <div className=' justify-content-center align-items-center'>
                        <p>we very strongly encourage buyers to think carefully before spending real currency on an invite code! Our primary concern is potential users getting scammed, exploited or ripped off - aside from it being a shitty thing to happen to someone.</p>
                    </div>
               </div>

           </div>


       </div>
    )
}

export default Footer;


{/* <h3 className='mt-5'>Toy House</h3>
                <div className='d-flex  mt-5'>
                    <div >
                    <NavLink className='m-2'>Home</NavLink>
                <NavLink>About</NavLink>
                    </div>
                    <div>
                    <NavLink className='m-2'>Blogs</NavLink>
                <NavLink>Items</NavLink>
                    </div> */}