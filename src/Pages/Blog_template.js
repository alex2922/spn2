import React from 'react'
import '../Styles/blogtemplate.scss';
import { Link } from 'react-router-dom';
import img from '../assets/s3.jpg';
import img2 from '../assets/s1.jpg';
import img3 from '../assets/s2.jpg'
import { FaArrowRight } from "react-icons/fa";



function Blog_template() {
    return (
        <>
            <div className="blog-template-parent parent">
                <div className="blog-template-container cont">
                    <div className="blog-template-top">

                        <div className="template-top-left">
                            <div className="template-blog-img bg-img-cover">
                                <img src={img} className='blo-img' />
                            </div>
                        </div>

                        <div className="template-top-right">
                            <div className="catergory">
                                <span>Category</span>
                                <h3 className='cate'>English</h3>
                            </div>
                            <div className="publish-date">
                                <span>Publish Date</span>
                                <h3 className='date'>4/03/2024</h3>
                            </div>

                            <Link to='/blog-view' className='btn'>All Blogs</Link>

                        </div>
                    </div>

                    <div className="blog-template-bottom">
                        <h2 className='blog-headding'>Pride of Modern India: “Atal Setu”</h2>
                        <hr />
                        <p>With the blessings of Prime Minister Narendra Modi, the inauguration of the Atal Bridge in Mumbai, the financial capital of Maharashtra, was a resounding success. The Atal Bridge is poised to save considerable time and fuel for commuters travelling to Mumbai. Utilising state-of-the-art Japanese technology, the Atal Bridge stands as a testament to India’s dynamism and progress. This monumental project integrates ocean, land, and swamp components, reflecting divine perfection achieved through the dedicated efforts of over 1,500 expert engineers and 16,500 skilled labourers who toiled day and night. The construction of the bridge involved approximately 1.2 lakh tonnes of steel, a staggering 17 times more than the iconic Eiffel Tower.

                            Stretching 22 kilometres, the Atal Bridge heralds a new era for Mumbaikars, with around 1,000 pillars facilitating speeds of up to 100 kilometres per hour. Commuters from South Mumbai and the Western Suburbs travelling via the Mumbai Beach Road will now reach Vinathamba mainland via the Atal Bridge, effectively reducing commuting distances and bridging urban divides. This significant reduction in travel time not only enhances citizen convenience but also contributes to environmental preservation by curbing carbon emissions and mitigating pollution. Environmental considerations have been meticulously integrated into the bridge’s design, with measures taken to safeguard habitats like marshes and marshlands, ensuring minimal disruption to local ecosystems, including the habitat of flamingos in the area.

                            Under the visionary leadership of Prime Minister Narendra Modi, the nation embarks on a transformative journey marked by comprehensive development initiatives. By dedicating this bridge to the memory of the former Prime Minister of India and Bharat Ratna awardee, the revered Atal Bihari Vajpayee, a fitting tribute is paid to his legacy of courageous endeavours. Atal ji’s unwavering commitment to the nation-first ideology serves as a guiding light for future generations, inspiring patriotism and a steadfast dedication to development. Through the Atal Bridge, may every citizen draw inspiration from the spirit of patriotism, propelling our nation forward on the path of dynamic progress. Best wishes!</p>
                    </div>

                </div>


            </div>


           
{/* Blog-home-section */}

            <div className="latest-news-parent parent">
                <div className="latest-news-container cont">
                    <div className="news-left">
                        <div className="top-news">
                            <div className="news-img-box">
                                <img src={img} className='news-img bg-img-cover' />
                            </div>
                        </div>
                        <div className='bottom-news'>
                            <h3>100th Divisional Drama Conference, Latur</h3>
                            <div className="upload-date">
                                <h4>4/03/2024</h4>
                                <span className='read-more'><FaArrowRight /></span>
                            </div>

                        </div>
                    </div>
                    <div className="news-right">
                        <div className="news-right-top-box1">
                            <div className="box1-news-top">
                                <img src={img2} className='box1-news-img bg-img-cover' />

                            </div>
                            <div className='box1-bottom-news'>
                                <h3>100th Divisional Drama Conference, Latur</h3>
                                <div className="upload-date">
                                    <h4>4/03/2024</h4>
                                    <span className='read-more'><FaArrowRight /></span>
                                </div>

                            </div>
                        </div>
                        {/* /// */}

                        <div className="news-right-bottom-box2">
                            <div className="box2-news-top">
                                <img src={img3} className='box2-news-img bg-img-cover' />

                            </div>
                            <div className='box2-bottom-news'>
                                <h3>100th Divisional Drama Conference, Latur</h3>
                                <div className="upload-date">
                                    <h4>4/03/2024</h4>
                                    <span className='read-more'><FaArrowRight /></span>
                                </div>

                            </div>
                        </div>






                    </div>
                </div>


            </div>

            {/* /////////// */}


        </>
    )
}

export default Blog_template