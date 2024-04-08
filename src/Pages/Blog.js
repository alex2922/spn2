import React, { useEffect, useState } from 'react'
import '../Styles/blog.scss';
import img1 from '../assets/s2.jpg';
import { Link } from 'react-router-dom';
import Blog_template from '../Pages/Blog_template';
import axios from "axios";

function Blogs(props) {
    const [blogdata, setdata] = useState([])
    const fetchData = () => {
        axios.get(props.toggle ? "https://backend.sambhajipatilnilangekar.com/api/blogs/category/1/" : "https://backend.sambhajipatilnilangekar.com/api/blogs/category/2/")
            .then(res => setdata(res.data))
            .catch(err => console.log(err))
    }
    console.log(blogdata)
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }
    useEffect(() => {
        fetchData();
    }, [props.toggle])
    console.log(blogdata)
    return (
        <>
            <div className="blog-parent parent">
                <div className="blog-container cont">
                    <div className="blog-headding">
                        <h2>Blogs</h2>
                    </div>
                    {
                        blogdata && blogdata.map((data) => {
                            return (
                                <Link to={`/blogs/${data.id}`} className="blog-card">
                                    <div className="blog-card-img ">
                                        <img src={data.image} alt='blog-img' className='bg-img-cover blog-img' />
                                        <h4 className="blogdate">4/03/2024</h4>
                                    </div>

                                    <div className="blog-card-bottom">
                                        <h3 className="blog-title">{data.title.slice(0,30)} ...</h3>
                                        {/* <Link to={`/blogs/${data.id}`} className='btn'>Read More</Link> */}
                                        {/* <div className="blog-text"></div> */}
                                    </div>

                                </Link>
                            )
                        })
                    }


                </div>
            </div>

            {/* <Blog_template/> */}
        </>
    )
}

export default Blogs