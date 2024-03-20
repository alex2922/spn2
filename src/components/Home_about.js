import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/homeabout.scss';

function Home_about() {
    return (
        <>
            <div className="home-about-parent parent">
                <div className="home-about-container container">
                    <div className="habout-left">
                        <div className="habout-img bg-img-cover"></div>
                    </div>
                    <div className="habout-right">
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut!
                            molestias architecto voluptate aliquam
                            molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! </p>
                        <Link to='#' className='btn-active'>Read More</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home_about