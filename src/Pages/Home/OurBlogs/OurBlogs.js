import React from 'react'
import { Container } from 'react-bootstrap'
import baby1 from '../../../image/banner/baby1.jpg';
import baby2 from '../../../image/banner/baby2.jpg';
import './OurBlogs.css';


function componentName() {
    return (
        <div>
            <div className='text-center m-5'>
            <h2>From Our Blogs</h2>
            <small><i>- Thinks we Talk About -</i></small>
            </div>
            <Container>
                <div >
                    <div className='d-flex baby1-box'>
                        <div className='m-5'>
                            <img
                            className="d-block w-100  rounded "
                            src={baby1}
                            />
                        </div>
                        <div className='m-5'>
                            <small>07 Nov 2022</small>
                            <h3>Keeping your baby <br/> safe using new <br/> Toys</h3>
                            <p>Find sleep without counting sheep with the 3-in-1 Starry Skies Sheep Soother. With three ways to use, this soother includes a projector..... </p>
                            
                            <button className='btn card-button rounded-pill'>Read More</button>
                        </div>
                    </div>
                    <div className='d-flex mt-5 baby1-box'>
                    <div className='m-5'>
                            <img
                            className="d-block w-75 h-75 rounded"
                            src={baby2}
                            />
                        </div>
                        <div className='m-5'>
                            <small>07 Nov 2022</small>
                            <h3>Keeping your baby <br/> safe using new <br/> Toys</h3>
                            <p>Find sleep without counting sheep with the 3-in-1 Starry Skies Sheep Soother. With three ways to use, this soother includes a projector..... </p>
                            
                            <button className='btn card-button rounded-pill'>Read More</button>
                        </div>
                    </div>
                </div>
            </Container>

        <Container className='mt-5 baby1-box '>
            <h1 className='text-center mt-3'>NewsLetter</h1>
            <div className='m-5'>
            <div class="mb-3">
                 <label  className="form-label">Email address</label>
                 <input type="email" className="form-control" id="exampleFormControlInput1"    placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example    textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <small>*Only for first time users</small>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button className="btn card-button rounded-pill" type="button">Subscribe</button>
            </div>
        </Container>


        </div>
    )
}

export default componentName
