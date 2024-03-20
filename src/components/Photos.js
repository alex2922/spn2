import React, { useEffect } from "react";
// import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import '../Styles/photos.scss';

import img1 from  '../photos/drushti2.0.jpeg'
import img2 from  '../photos/g46.jpg'
import img3 from  '../photos/image29.jpg'
import img4 from  '../photos/janjagar7.jpg'
import img5 from  '../photos/latur1.jpg'
import img6 from  '../photos/latur5.jpg'
import img7 from  '../photos/latur6.jpg'
import img8 from  '../photos/latur8.jpg'
import img9 from  '../photos/post-spn.jpg'
import img10 from '../photos/samrudh-shetkari2.jpg' 
import img11 from "../assets/img235.jpg"
// import img11 from '../Img/gallery-page/11.webp'
// import img12 from '../Img/gallery-page/12.webp' 
// import img13 from '../Img/gallery-page/13.webp'
// import img14 from '../Img/gallery-page/14.webp'
// import img15 from '../Img/gallery-page/15.webp'
// import img16 from '../Img/gallery-page/16.webp'
// import img17 from '../Img/gallery-page/17.webp'
// import img18 from '../Img/gallery-page/18.webp'
// import img19 from '../Img/gallery-page/19.webp'
// import img20 from '../Img/gallery-page/20.webp'
// import img21 from '../Img/gallery-page/21.webp'
// import img22 from '../Img/gallery-page/22.webp'
// import img23 from '../Img/gallery-page/23.webp'
// import img24 from '../Img/gallery-page/24.webp'
// import img25 from '../Img/gallery-page/25.webp'
// import img26 from '../Img/gallery-page/26.webp'
// import img27 from '../Img/gallery-page/27.webp'
// import img28 from '../Img/gallery-page/28.webp'
// import img29 from '../Img/gallery-page/29.webp'
// import img30 from '../Img/gallery-page/30.webp'
// import img31 from '../Img/gallery-page/31.webp'
// import img32 from '../Img/gallery-page/32.webp'
// import img33 from '../Img/gallery-page/33.webp'
// import img34 from '../Img/gallery-page/34.webp'
// import img35 from '../Img/gallery-page/35.webp'
// import img36 from '../Img/gallery-page/36.webp'
// import img37 from '../Img/gallery-page/37.webp'
// import img38 from '../Img/gallery-page/38.webp'
// import img39 from '../Img/gallery-page/39.webp'
// import img40 from '../Img/gallery-page/40.webp'
// import img41 from '../Img/gallery-page/41.webp'
// import img42 from '../Img/gallery-page/42.webp'
// import img43 from '../Img/gallery-page/43.webp'
// import img44 from '../Img/gallery-page/44.webp'
// import img45 from '../Img/gallery-page/45.webp'
// import img46 from '../Img/gallery-page/46.webp'
// import img47 from '../Img/gallery-page/47.webp'
// import img48 from '../Img/gallery-page/48.webp'
// import img49 from '../Img/gallery-page/49.webp'
// import img50 from '../Img/gallery-page/50.webp'
const { useState } = React;



//IMAGE ARRAY
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
    // img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49, img50

];


//MAIN APP COMPONENT
const Photos = () => {
    return (
        <>
            <div className="photo-parent">
                <div className="gallery-c">
                    <ImageGallery />
                </div>
            </div>
        </>

    );
}

function ImageGallery() {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [visible, setvisible] = useState(6)
    //looping through our images array to create img elements
    const loadmoreHandler =()=>
    {
        setvisible((prevvalue)=>prevvalue+6)
    }
    const imageCards = images.slice(0, visible).map((image) => (
        <img key={image} className="image-card" onClick={() => showImage(image)} src={image} alt={image} />
    ));
     
    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    //show next image in lightbox
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex >= images.length - 1) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = images[currentIndex + 1];
            setImageToShow(nextImage);
        }
    };

    //show previous image in lightbox
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = images[currentIndex - 1];
            setImageToShow(nextImage);
        }
    };
    const showLoadMoreButton = images.length > visible;
    return (
        <>
            <div>{imageCards}</div>
            {
                lightboxDisplay ?
                    <div id="lightbox" onClick={hideLightBox}>
                        <button className="gallery-btn" onClick={showPrev}>⭠</button>
                        <img id="lightbox-img" src={imageToShow} alt="imageToShow" />
                        <button className="gallery-btn" onClick={showNext}>⭢</button>
                    </div>
                    : ""
            }
          {showLoadMoreButton && <button className="btn loadmore-btn" onClick={loadmoreHandler}>Load More</button>}  
        </>
    )
}


export default Photos