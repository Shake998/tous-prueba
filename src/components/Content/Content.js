import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//Import Components
import Gallery from '../Gallery/Gallery';
import Topcontent from '../Topcontent/Topcontent';
import Swipercontent from '../Swipercontent/Swipercontent';
import Buttonsarea from "../Buttonsarea/Buttonsarea";

// Import Component's css
import './Content.css';


function Content() {
  return (
    <div className="Content">
        <Topcontent />
        <Buttonsarea />
        <Gallery />
        <Swipercontent />
        
    </div>
  );
}

export default Content;
