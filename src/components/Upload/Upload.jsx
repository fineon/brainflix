import React from 'react';
import {Link} from "react-router-dom";
import './Upload.scss';
import imgUpload from "./../../assets/Images/Upload-video-preview.jpg";
import Nav from '../Nav/Nav';
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');


let apiUrl = 'http://nodejs.heythereian.com/videos/';

export default function Upload(props) {

    //creates the current date timestamp
    let currentDate = new Date().toLocaleDateString();

    //submit event handler
    const handleClick = (event) => {
        let resBody = {
            "id": uuidv4(),
            "title": event.target.title.value,
            "channel": "Blue Bike",
            "image": imgUpload,
            "description": event.target.desc.value,
            "views": "1,001,023",
            "likes": "110,985",
            "duration": "2:00",
            "video": "https://project-2-api.herokuapp.com/stream",
            "timestamp": currentDate,
            "comments": [
                {
                    "name": "Micheal Lyons",
                    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                    "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                    "likes": 0,
                    "timestamp": 1545162149000
                },
                {
                    "name": "Gary Wong",
                    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                    "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                    "likes": 0,
                    "timestamp": 1544595784046
                },
                {
                    "name": "Theodore Duncan",
                    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                    "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                    "likes": 0,
                    "timestamp": 1542262984046
                }
            ]
        }

        event.preventDefault();

        //set up condition that only allows form submission when all fields are filled
        if (!event.target.title.value || !event.target.desc.value) {
            alert('please fill all of the input fields to upload your video');
        } else {
            alert('Your video is submitted! Check the front page to see all of your videos');
            axios.post(apiUrl, resBody)
                .then(res => {
                    console.log(res)
                })
            //pushes the path to the history stack and navigate the page to the homepage
            props.history.push("/");
        }
    }


    //setting title for the upload page
    document.title = "Upload Page"
    return (
        //renders the upload page
        <>
            <Nav />
            <section className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <hr className="upload__divider" />
                <div className="upload__desktop-inline">
                    <div className="upload__grand-container">
                        <div className="upload__thumbnail">
                            <h5 className="upload__thumbnail__title">video thumbnail</h5>
                            <img className="upload__thumbnail__img"
                                src={imgUpload}
                                alt="upload" />
                        </div>
                    </div>
                    <form
                        className="upload__form"
                        onSubmit={handleClick}
                        id="vidUpLoad">
                        <div className="upload__section">
                            <div className="upload__section__field">
                                <h5 className="upload__section__field__title">title your video</h5>
                                <textarea
                                    name="title"
                                    className="upload__section__field__input"
                                    cols="50"
                                    rows="0"
                                    placeholder="Add a title to your video"></textarea>
                                <h5 className="upload__section__field__title"> add a video description</h5>
                                <textarea
                                    name="desc"
                                    className="upload__section__field__input"
                                    cols="50"
                                    rows="5"
                                    placeholder="Add a description to your video"></textarea>
                            </div>
                        </div>

                    </form>
                </div>
                <hr className="upload__section__divider" />
                <div className="upload__section__container">
                    <div className="upload__section__action">
                        <button
                            className="upload__section__action__button"
                            form="vidUpLoad">
                            publish
                                </button>
                        {/* link to the main page for cancel button */}
                        <Link to="/"
                            className="upload__router-link">
                            <h4 className="upload__section__action__cancel">
                                cancel
                            </h4>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
