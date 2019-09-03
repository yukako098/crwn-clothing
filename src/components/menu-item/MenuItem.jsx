import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                className="bg-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="content">
                <div className="title">{title.toUpperCase()}</div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);

// update my menu-items to navigate withRouter HOC
