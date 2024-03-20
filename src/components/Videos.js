import React, { useState } from "react";
import '../Styles/videos.scss';
import ReactPlayer from 'react-player';

function Videos() {
    const [visible, setVisible] = useState(6);

    const loadmoreHandler = () => {
        setVisible(prevValue => prevValue + 6);
    };

    // Array of video URLs
    const videoUrls = [
        'http://sambhajipatilnilangekar.com/wp-content/uploads/2023/08/367999796_959023742024879_662381460605770787_n.mp4',
        'https://youtu.be/GCY883rqQAo',
        'https://youtu.be/CHtmbqU7RTg',
        'https://youtu.be/CHtmbqU7RTg',
'https://youtu.be/mkDIz7pyQ80',
'https://youtu.be/KL-4lIQI5BY',
'https://youtu.be/Tt2omefCXsc',
'https://youtu.be/xJx5XcY2vWc',
'https://youtu.be/thPFem3kMW0',
'https://youtu.be/thPFem3kMW0',
'https://youtu.be/3k6rDWO0tdM',
'https://youtu.be/IoBsY4yXMyE',
'https://youtu.be/Kn0vgEdf3Uc',
'https://youtu.be/cUN_bYibzb0',
'https://youtu.be/aJBJaTCod0I',
'https://youtu.be/c1mxp7jwx38',
'https://youtu.be/TvDwb1qUxMo',
'https://youtu.be/76T7rDLZUIE',
'https://youtu.be/7P15eF-xoRI',
'https://youtu.be/Fp-L3P4kUFo',
'https://youtu.be/9u5yH28IInk',
        // Add more video URLs here
    ];

    // Render videos based on the visible state
    const videoComponents = videoUrls.slice(0, visible).map((url, index) => (
        <div key={index} className='first-video'>
            <ReactPlayer className="video_player" controls url={url} />
        </div>
    ));

    // Determine whether to show the "Load More" button
    const showLoadMoreButton = videoUrls.length > visible;

    return (
        <>
            <div className='video-gallery-parent'>
                <div className='video-gallery-container'>
                    <div className='video-gallery-box'>
                        {videoComponents}
                    </div>
                    
                </div>
                <div className="load-container">
                {showLoadMoreButton && <button className="btn loadmore-btn vloadbtn" onClick={loadmoreHandler}>Load More</button>}
                </div>
            </div>
            
        </>
    );
}

export default Videos;

