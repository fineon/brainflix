import React from 'react';
import './NextVideo.scss';
import {Link} from "react-router-dom";

export default function Nextvid(props) {
    //next video card links that will receive URL ID pulled from API
    return (
        <Link
            className="nextvid__link"
            to={`/video/${props.id}`}
        >
            <div className="nextvid__card-container"
            >
                <img
                    className="nextvid__card-container__img"
                    src={props.image}
                    alt="video" />
                <div className="nextvid__card-container__title-container"
                >
                    <h4
                        className="nextvid__card-container__title-container__title">
                        {props.title}
                    </h4>
                    <h4
                        className="nextvid__card-container__title-container__author">
                        {props.channel}
                    </h4>
                </div>
            </div>
        </Link>
    )
}
