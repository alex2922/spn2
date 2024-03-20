import React from 'react'
import '../Styles/blog.scss';
import img1 from '../assets/s2.jpg';
import { Link } from 'react-router-dom';
import Blog_template from '../Pages/Blog_template';


function Blogs() {
    return (
        <>

            <div className="blog-parent parent">
                <div className="blog-container cont">
                    <div className="blog-headding">
                        <h2>Blogs</h2>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-img ">
                            <img src={img1} alt='blog-img' className='bg-img-cover blog-img' />
                            <h4 className="blogdate">4/03/2024</h4>
                        </div>

                        <div className="blog-card-bottom">
                            <h3 className="blog-title">Pride of Modern India: “Atal Setu”</h3>
                            <Link to='#' className='btn'>Read More</Link>
                            {/* <div className="blog-text"></div> */}
                        </div>

                    </div>
                    <div className="blog-card">
                        <div className="blog-card-img ">
                            <img src={img1} alt='blog-img' className='bg-img-cover blog-img' />
                            <h4 className="blogdate">4/03/2024</h4>
                        </div>
                        <div className="blog-card-bottom">
                            <h3 className="blog-title">Pride of Modern India: “Atal Setu”</h3>
                            <Link to='#' className='btn'>Read More</Link>
                            {/* <div className="blog-text"></div> */}
                        </div>

                    </div>
                    <div className="blog-card">
                        <div className="blog-card-img ">
                            <img src={img1} alt='blog-img' className='bg-img-cover blog-img' />
                            <h4 className="blogdate">4/03/2024</h4>
                        </div>
                        <div className="blog-card-bottom">
                            <h3 className="blog-title">Pride of Modern India: “Atal Setu”</h3>
                            <Link to='#' className='btn'>Read More</Link>
                            {/* <div className="blog-text"></div> */}
                        </div>

                    </div>
                    <div className="blog-card">
                        <div className="blog-card-img ">
                            <img src={img1} alt='blog-img' className='bg-img-cover blog-img' />
                            <h4 className="blogdate">4/03/2024</h4>
                        </div>
                        <div className="blog-card-bottom">
                            <h3 className="blog-title">Pride of Modern India: “Atal Setu”</h3>
                            <Link to='#' className='btn'>Read More</Link>
                            {/* <div className="blog-text"></div> */}
                        </div>

                    </div>
                    <div className="blog-card">
                        <div className="blog-card-img ">
                            <img src={img1} alt='blog-img' className='bg-img-cover blog-img' />
                            <h4 className="blogdate">4/03/2024</h4>
                        </div>
                        <div className="blog-card-bottom">
                            <h3 className="blog-title">Pride of Modern India: “Atal Setu”</h3>
                            <Link to='#' className='btn'>Read More</Link>
                            {/* <div className="blog-text"></div> */}
                        </div>

                    </div>
                    <div className="blog-card">
                        <div className="blog-card-img ">
                            <img src={img1} alt='blog-img' className='bg-img-cover blog-img' />
                            <h4 className="blogdate">4/03/2024</h4>
                        </div>
                        <div className="blog-card-bottom">
                            <h3 className="blog-title">Pride of Modern India: “Atal Setu”</h3>
                            <Link to='#' className='btn'>Read More</Link>
                            {/* <div className="blog-text"></div> */}
                        </div>

                    </div>
                    <div className="blog-card">
                        <div className="blog-card-img ">
                            <img src={img1} alt='blog-img' className='bg-img-cover blog-img' />
                            <h4 className="blogdate">4/03/2024</h4>
                        </div>
                        <div className="blog-card-bottom">
                            <h3 className="blog-title">Pride of Modern India: “Atal Setu”</h3>
                            <Link to='#' className='btn'>Read More</Link>
                            {/* <div className="blog-text"></div> */}
                        </div>

                    </div>


                </div>
            </div>

            {/* <Blog_template/> */}
        </>
    )
}

export default Blogs