import React from "react";
import Photos from "../components/Photos";
import Videos from "../components/Videos";
import "../Styles/gallery.scss";
import Media from "../components/Media";
import Personalphotos from "../components/Personalphotos";
import { Link } from "react-router-dom";

const Gallery = (props) => {
  return (
    <>
      {/* <div key={index}> */}
      {/* <Helmet>
                <title>Discover Our Gallery: A Fusion of Images, Paper Cutouts, and Video Collections</title>
                <meta name="keywords" content=" gallery, media, paper cutouts, images, image collection, video collection, media collection " />
                <meta name="description" content="Explore our diverse gallery featuring captivating images, creative paper cutouts, and a curated collection of videos. Immerse yourself in a rich media experience with our unique collection. " />
                <link rel="canonical" href="https://arvindpatilnilangekar.in/gallery/" />
            </Helmet> */}

      {props.data.map((data) => {
        return (
          <div className="gallery-buttons parent">
            <div className="gallery-btn-div container-small">
              <button
                className={
                  props.photo
                    ? "btn-active gallery-btn1"
                    : "btn-unactive gallery-btn1"
                }
                onClick={() => {
                  props.setmedia(false);
                  props.setphoto(true);
                  props.setvideo(false);
                  props.setpersonalphoto(false);
                }}
              >
                {data.Gallery_Photo}
              </button>
              <button
                className={
                  props.video
                    ? "btn-active gallery-btn1"
                    : "btn-unactive gallery-btn1"
                }
                onClick={() => {
                  props.setmedia(false);
                  props.setphoto(false);
                  props.setvideo(true);
                  props.setpersonalphoto(false);
                }}
              >
                {data.Gallery_Videos}
              </button>
              <button
                className={
                  props.media
                    ? "btn-active gallery-btn1"
                    : "btn-unactive gallery-btn1"
                }
                onClick={() => {
                  props.setmedia(true);
                  props.setphoto(false);
                  props.setvideo(false);
                  props.setpersonalphoto(false);
                }}
              >
                {data.Gallery_Media}
              </button>

              <a
                href="http://stock.sambhajipatilnilangekar.com"
                target="_blank"
                 rel="noopener noreferrer"
                className="gallery-btn-new"
     
                
                // onClick={() => {
                //   props.setmedia(false);
                //   props.setphoto(false);
                //   props.setvideo(false);
                //   props.setpersonalphoto(true);
                // }}
              >
                {data.Gallery_Stock}
              </a>
            </div>
          </div>
        );
      })}

      <div className="gallery-container parent">
        {props.photo && <Photos />}
        {props.video && <Videos />}
        {props.media && <Media />}
        {props.personalphoto && <Personalphotos />}
      </div>
      {/* </div> */}
    </>
  );
};

export default Gallery;
