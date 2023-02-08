import React from 'react';

//Import Video
import VideoSource from "../../images/bg-3.jpg";


import './Buttonsarea.css';

function Buttonsarea() {
    return (
        <section className="section-btn container-fluid mt-5 p-5">
            <div className="container d-flex justify-content-center">
                {/* Description + Buttons */}
                <div className="col-12 col-gallery col-md-6 card-text mx-4 text-white order-1 order-md-3">
                    <span className="card-over">Lorem ipsum</span>
                    <h1 className="title mt-1">LOREM IPSUM</h1>
                    <span className="card-under">Lorem ipsum</span>
                    <p className="card-description mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="btn btn-1 py-2 w-100">CTA 1</button>
                    <button className="btn btn-2 mt-3 py-2 w-100 border border-dark">CTA 2</button>
                </div>
                <div className="col-1 col-space order-md-2"></div>
                {/* Video //! It is an image by now but should be a video */}
                <div className="col-12 col-md-4 mx-4 card card-image order-2 order-md-1">
                    <img className="image" src={VideoSource}/>
                </div>
            </div>
        </section>
    );
}

export default Buttonsarea;
