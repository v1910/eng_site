import React from "react"

import {HeaderHeader} from "HeaderHeader.js"

import home from "London.jpg"


//import home from "../img/home/home-1.jpg";

//const bg = {
//    backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)),
//  url(${home})`
//  };

export function HeaderBgrTest() {
/*  
  const src_img = '.header_bgr_test{background-image: url("./img/London.jpg")};'
  const bg = {
    backgroundImage: `url(${home})`
  };
  document.write({bg}); 
*/
  return (
    <div className="header_bgr_test">
      <HeaderHeader />
    </div>
  )
}

// export default HeaderBgrTest