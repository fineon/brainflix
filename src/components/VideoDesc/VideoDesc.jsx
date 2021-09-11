import React from 'react';
import "./VideoDesc.scss";
import eyeLogo from './../../assets/Icons/SVG/Icon-views.svg';
import likesLogo from './../../assets/Icons/SVG/Icon-likes.svg';

export default function Videodesc(props) {
    //description of the main video, with a date object converted to string for correct date format
    return (
        <>
            <h1 className="vidinfo__title">
                {props.title}
            </h1>
            <div className="vidinfo__stats-aside">
                <div className="vidinfo__author-container">
                    <h3 className="vidinfo__author-container__author" >
                        By {props.channel}
                    </h3>
                    <h5 className="vidinfo__author-container__date">
                        {new Date(props.timestamp).toLocaleDateString()}
                    </h5>
                </div>

                <div className="vidinfo__view-likes">
                    <div className="vidinfo__view-container">
                        <img
                            className="vidinfo__view-container__viewicon"
                            src={eyeLogo}
                            alt="view icon" />
                        <p className="vidinfo__view-container__viewicon-count">
                            {props.views}
                        </p>
                    </div>

                    <div className="vidinfo__likes-container">
                        <img
                            className="vidinfo__likes-container__likeicon"
                            src={likesLogo}
                            alt="likes counts icon" />
                        <p className="vidinfo__likes-container__likeicon-count">
                            {props.likes}
                        </p>
                    </div>
                </div>
            </div>
            <hr className="vidinfo__divider" />
            <p className="vidinfo__desc">
                {props.description}
            </p>
        </>
    )
}
