import React from "react";
import preload from "../../../assets/images/preload.gif";

const Preloader = (props) => {
    return <div>
        <img alt={'#'} src={preload} />
    </div>
}

export default Preloader;