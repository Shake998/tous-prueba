import React from 'react';
//Import Images
//! Import images from public folder
import Image1 from "../../images/bg-6.jpg";
import Image2 from "../../images/bg-11.jpg";
import Image3 from "../../images/bg-10.jpg";
import Image4 from "../../images/bg-7.jpg";
import Image5 from "../../images/bg-8.jpg";
import Image6 from "../../images/bg-9.jpg";

//Import Component's css
import './Gallery.css';

function Gallery() {
    return (
        <section className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center">
            {/* Title */}
            <div className="top container">
                <h3>LOREM IPSUM</h3>
                <h1>#LOREM</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. 
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
                </p>
            </div>
            {/* Images */}
            <div className="row container images-columns w-100 d-flex justify-content-center">
                {/* First Row Only Desktop */}
                <div className="col px-1 py-1 lat-desktop">
                    <img src={Image1} className="img-fluid vertical-image" alt="gallery 1"/>
                </div>
                {/* Second Row */}
                <div className="col d-flex flex-column justify-content-between px-1">
                    <div className=" col p-0 py-1">
                        <img id="image-2" src={Image3} className="central-image img-fluid"/>
                    </div>
                    <div className=" col p-0 py-1">
                        <img id="image-3" src={Image4} className="central-image img-fluid"/>
                    </div>
                </div>
                {/* Third Row */}
                <div className="col d-flex flex-column justify-content-between px-1">
                    <div className=" col p-0 py-1">
                        <img id="image-4" src={Image2} className="central-image img-fluid"/>
                    </div>
                    <div className=" col p-0 py-1">
                        <img id="image-5" src={Image5} className="central-image img-fluid"/>
                    </div>
                </div>
                {/* Last Row */}
                <div className="col d-flex flex-column justify-content-between px-1">
                    {/* Only Mobile */}
                    <div className="lat-mobile col p-0 py-1">
                        <img id="image-6" src={Image4} className="img-fluid"/>
                    </div>
                    <div className="lat-mobile col p-0 py-1">
                        <img id="image-7" src={Image3} className="img-fluid"/>
                    </div>
                    {/* Only Desktop */}
                    <img src={Image6} className="lat-desktop img-fluid py-1 vertical-image"/>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
