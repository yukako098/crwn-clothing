import React from "react";

import Directory from "../../components/directory/Directory";
import "./HomePages.scss";

const HomePages = () => {
    return (
        <div className="homepage">
            <h1>Welcome to my Homepage</h1>
            <Directory />
        </div>
    );
};

export default HomePages;
