
import React, { useEffect } from "react";
import '../Styles/media.scss';
import { Link } from "react-router-dom";
import img1 from  '../media/m1.jpg'
import img2 from  '../media/m2.jpg'
import img3 from  '../media/m3.jpg'
import img4 from  '../media/m4.jpg'
import img5 from  '../media/m5.jpg'
import img6 from  '../media/m6.jpg'
import img7 from  '../media/m7.jpg'
import img8 from  '../media/m8.jpg'
import img9 from  '../media/m9.jpg'
import img10 from '../media/m10.jpg' 
import img11 from '../media/m11.jpg' 
import img12 from '../media/m12.jpg'
import img13 from '../media/m13.jpg'
import img14 from '../media/m14.jpg'
import img15 from '../media/m15.jpg'
import img16 from '../media/m16.jpeg'
import img17 from '../media/m17.jpeg'
import img18 from '../media/m18.jpeg'
import img19 from '../media/m19.jpeg'
import img20 from '../media/m220.jpeg'
import img21 from '../media/m21.jpeg'
import img22 from '../media/m22.jpeg'
import img23 from '../media/m23.jpeg'
import img24 from '../media/m24.jpeg'
import img25 from '../media/m25.jpeg'
import img26 from '../media/m26.jpeg'
import img27 from '../media/m27.jpeg'
import img28 from '../media/m28.jpeg'
import img29 from '../media/m29.jpeg'
import img30 from '../media/m30.jpeg'
import img31 from '../media/m31.jpg'
import img32 from '../media/m32.jpeg'
import img33 from '../media/m33.jpeg'
import img34 from '../media/m34.jpeg'
import img35 from '../media/m35.jpeg'
import img36 from '../media/m36.jpg'
import img37 from '../media/m37.jpg'
import img38 from '../media/m38.jpg'
import img39 from '../media/m39.jpg'
import img40 from '../media/m40.jpg'
// import img41 from '../Img/gallery-page/media/akka-foundation-media41.jpg'
// import img42 from '../Img/gallery-page/media/akka-foundation-media42.jpg'
// import img43 from '../Img/gallery-page/media/akka-foundation-media43.jpg'
// import img44 from '../Img/gallery-page/media/akka-foundation-media44.jpg'
// import img45 from '../Img/gallery-page/media/akka-foundation-media45.jpg'
// import img46 from '../Img/gallery-page/media/akka-foundation-media46.jpg'
// import img47 from '../Img/gallery-page/media/akka-foundation-media47.jpg'
// import img48 from '../Img/gallery-page/media/akka-foundation-media48.jpg'
// import img49 from '../Img/gallery-page/media/akka-foundation-media49.jpg'
// import img50 from '../Img/gallery-page/media/akka-foundation-media50.jpg'
// import img51 from '../Img/gallery-page/media/akka-foundation-media51.jpg'
// import img52 from '../Img/gallery-page/media/akka-foundation-media52.jpg'
// import img53 from '../Img/gallery-page/media/akka-foundation-media53.jpg'
// import img54 from '../Img/gallery-page/media/akka-foundation-media54.jpg'
// import img55 from '../Img/gallery-page/media/akka-foundation-media55.jpg'
// import img56 from '../Img/gallery-page/media/akka-foundation-media56.jpg'
// import img57 from '../Img/gallery-page/media/akka-foundation-media57.jpg'
// import img58 from '../Img/gallery-page/media/akka-foundation-media58.jpg'
// import img59 from '../Img/gallery-page/media/akka-foundation-media59.jpg'
// import img60 from '../Img/gallery-page/media/akka-foundation-media60.jpg'
// import img61 from '../Img/gallery-page/media/akka-foundation-media61.jpg'
// import img62 from '../Img/gallery-page/media/akka-foundation-media62.jpg'
// import img63 from '../Img/gallery-page/media/akka-foundation-media63.jpg'
// import img64 from '../Img/gallery-page/media/akka-foundation-media64.jpg'
// import img65 from '../Img/gallery-page/media/akka-foundation-media65.jpg'
// import img66 from '../Img/gallery-page/media/akka-foundation-media66.jpg'
// import img67 from '../Img/gallery-page/media/akka-foundation-media67.jpg'
// import img68 from '../Img/gallery-page/media/akka-foundation-media68.jpg'
// import img69 from '../Img/gallery-page/media/project-anandi-media1.jpeg'
// import img70 from '../Img/gallery-page/media/project-anandi-media2.jpeg'
// import img71 from '../Img/gallery-page/media/project-anandi-media3.jpeg'
// import img72 from '../Img/gallery-page/media/project-anandi-media4.jpeg'
// import img73 from '../Img/gallery-page/media/project-anandi-media5.jpeg'
// import img74 from '../Img/gallery-page/media/project-anandi-media6.jpeg'
// import img75 from '../Img/gallery-page/media/project-anandi-media7.jpeg'
// import img76 from '../Img/gallery-page/media/project-anandi-media8.jpeg'
// import img77 from '../Img/gallery-page/media/project-anandi-media9.jpeg'
// import img78 from '../Img/gallery-page/media/project-anandi-media10.jpeg'
// import img79 from '../Img/gallery-page/media/Drushi-abhiyan-media1.jpg'
// import img80 from '../Img/gallery-page/media/Drushti-abhiyan-media2.jpg'
// import img81 from '../Img/gallery-page/media/Drushti-abhiyan-media3.jpg'
// import img82 from '../Img/gallery-page/media/Drushti-abhiyan-media4.jpg'
// import img83 from '../Img/gallery-page/media/Drushti-abhiyan-media5.jpg'
// import img84 from '../Img/gallery-page/media/Drushti-abhiyan-media6.jpg'
const { useState } = React;



//IMAGE ARRAY
const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
     img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    //    img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57, img58, img59, img60, img61, img62, img63, img64, img65, img66, img67, img68, img69, img70, img71, img72, img73, img74, img75, img76, img77, img78, img79, img80, img81, img82, img83, img84
    
];


//MAIN APP COMPONENT
const Media=()=> {
    return (
        <>
            <div className="media-btns-parent">
                
          


            <div className="media-parent">
                <div className="media-gallery-c">
                    <ImageGallery />
                </div>
            </div>

    
            </div>
        </>

    );
}

function ImageGallery() {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [visible, setvisible] = useState(6)
    const loadmoreHandler =()=>
    {
        setvisible((prevvalue)=>prevvalue+6)
    }
    //looping through our images array to create img elements
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


export default Media