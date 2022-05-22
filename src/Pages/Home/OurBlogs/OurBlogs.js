import React from 'react'
import { Container } from 'react-bootstrap'
import baby1 from '../../../image/banner/baby1.jpg';
import baby2 from '../../../image/banner/baby2.jpg';


function componentName() {
    return (
        <div>
            <div className='text-center m-5'>
            <h2>From Our Blogs</h2>
            <small><i>- Thinks we Talk About -</i></small>
            </div>
            <Container>
                <div>
                    <div className='d-flex '>
                        <div>
                            <img
                            className="d-block w-50 h-50 rounded"
                            src={baby1}
                            />
                        </div>
                        <div className='baby1-title'>
                            <small>07 Nov 2022</small>
                            <h3>Keeping your baby <br/> safe using new <br/> Toys</h3>
                            <p>Find sleep without counting sheep with the 3-in-1 Starry Skies Sheep Soother. With three ways to use, this soother includes a projector..... </p>
                            
                            <button>Read More</button>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default componentName
