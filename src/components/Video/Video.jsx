import React from 'react';
import './Video.scss';
import iconFullscreen from './../../assets/Icons/SVG/Icon-fullscreen.svg';
import iconPlay from './../../assets/Icons/SVG/Icon-play.svg';
import iconVolume from './../../assets/Icons/SVG/Icon-volume.svg';

export default function Video(props) {
    //main video player and receiving data passed from Main component
    return (
        <div className="video__desktop-container">
            <div className="video">
                <video
                    className="video__player"
                    poster={props.image}>
                </video>

                <div className="video__icon-container">
                    <div className="video__icon-container__play">
                        <img
                            className="video__icon-container__play-icon"
                            src={iconPlay}
                            alt="icon" />
                    </div>

                    <div className="video__icon-container__scrubber">
                        <hr className="video__icon-container__scrubber-icon" />
                        <p
                            className="video__icon-container__scrubber-text">
                            {props.duration}
                        </p>
                    </div>

                    <div
                        className="video__icon-container__fullscreen-volume">
                        <img
                            className="video__icon-container__fullscreen-volume-icon"
                            src={iconFullscreen}
                            alt="icon" />
                        <img
                            src={iconVolume}
                            alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}
