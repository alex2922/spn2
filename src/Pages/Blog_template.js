import React, { useEffect, useState, } from 'react'
import '../Styles/blogtemplate.scss';
import { Link, useParams } from 'react-router-dom';
import img from '../assets/s3.jpg';
import img2 from '../assets/s1.jpg';
import img3 from '../assets/s2.jpg'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';



function Blog_template() {
    const { id } = useParams()
    const [blogdata, setblogdata] = useState([])
    const fetchData = () => {
        axios.get(`https://backend.sambhajipatilnilangekar.com/api/blogs/${id}/`)
            .then(res => setblogdata(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData();
    }, []);
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }
    console.log(blogdata)
    return (
        <>
            <div className="blog-template-parent parent">
                <div className="blog-template-container cont">
                    <div className="blog-template-top">

                        <div className="template-top-left">
                            <div className="template-blog-img bg-img-cover">
                                <img src={blogdata.image} className='blo-img' />
                            </div>
                        </div>

                        <div className="template-top-right">
                            <div className="catergory">
                                <span>Language</span>
                                <h3 className='cate'>{blogdata.category && blogdata.category.name}</h3>
                            </div>
                            <div className="publish-date">
                                <span>Publish Date</span>
                                <h3 className='date'>{formatDate(blogdata.date)}</h3>
                            </div>
                            <center style={{ padding: "10px" }}>
                                <Link to='/blog' className='btn'>All Blogs</Link>
                            </center>


                        </div>
                    </div>

                    <div className="blog-template-bottom">
                        <h2 className='blog-headding'>{blogdata.title}</h2>
                        <hr />
                        <p dangerouslySetInnerHTML={{ __html: blogdata.blog_content }} />
                    </div>

                </div>


            </div>


        </>
    )
}

export default Blog_template