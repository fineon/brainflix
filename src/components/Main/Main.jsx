import React, { Component } from 'react';
import axios from 'axios';
import './Main.scss';
import Videodesc from './../VideoDesc/VideoDesc';
import Comment from "./../Comment/Comment";
import Nextvid from './../NextVideo/NextVideo';
import Video from './../Video/Video';
import Nav from './../Nav/Nav';

import mohanImg from './../../assets/Images/Mohan-muruge.jpg';

export default class Main extends Component {
    //initial state object that holds mock objects similar to API's so we can pass them in our child components
    state = {
        sideVideo: [],
        mainVideo: []
    }

    //initial mount that renders side video and main video for the first state object
    componentDidMount() {
        axios.get('https://nodejs.heythereian.com/videos/')
            .then(item => {
                console.log(item);
                this.setState(
                    { sideVideo: item.data }
                )

                axios.get(`https://nodejs.heythereian.com/videos/1af0jruup5gu`)
                .then(mainDesc => {
                    console.log(mainDesc)
                    this.setState(
                        { mainVideo: mainDesc.data }
                    )
                })

            })
       
            .catch(err => {
                console.log(err)
            })
    }

    //re-render and update the main video and next videos with the rest of the API data
    componentDidUpdate() {
        // if (this.state.mainVideo.id !== this.props.match.params.id) {
        let { match: { params } } = this.props;
        let vidid = params.id ? params.id : "1af0jruup5gu";

        // let vidid = id.id ? id.id : "1af0jruup5gu";
        axios.get(`https://nodejs.heythereian.com/videos/${vidid}`)
            .then(mainVidDesc => {
                if ( this.state.mainVideo.id !== vidid) {
                    this.setState({
                        mainVideo: mainVidDesc.data
                    })
                }
            })
            .catch(err => console.log(err))
        // }
    }

    render() {
        //filtering current ids that doesn't match the url id and put them in an array for later mapping
        let videoFilter = this.state.sideVideo.filter(item =>
            item.id !== this.state.mainVideo.id
        )
     
        //renders all child components, mapping them from state and passing state as props to display data obtained
        return (
            <>
                <Nav />
                <Video
                    duration={this.state.mainVideo.duration}
                    image={this.state.mainVideo.image}
                    id={this.state.mainVideo.id}
                />
                <main className="main">
                    <section className="vidinfo">

                        <Videodesc
                            id={this.state.mainVideo.id}
                            title={this.state.mainVideo.title}
                            timestamp={this.state.mainVideo.timestamp}
                            channel={this.state.mainVideo.channel}
                            views={this.state.mainVideo.views}
                            likes={this.state.mainVideo.likes}
                            description={this.state.mainVideo.description}
                            key={this.state.mainVideo.id}
                        />

                        <h3 className="vidinfo__comment-title">3 Comments</h3>

                        <div className="vidinfo__comment-container">
                            <img
                                className="vidinfo__comment-container__img"
                                src={mohanImg}
                                alt="user" />

                            <div className="vidinfo__comment-container__form">
                                <h5 className="vidinfo__comment-container__form__title">join the conversation</h5>

                                <form className="vidinfo__comment-container__form__desktop">
                                    <textarea className="vidinfo__comment-container__form__field"
                                        placeholder="That was easily the most spectacular BMX moment ever.">
                                    </textarea>
                                    <button className="vidinfo__comment-container__form__button">comment</button>
                                </form>
                            </div>
                        </div>

                        {this.state.mainVideo.comments && this.state.mainVideo.comments.map(item => {
                            return <Comment
                                name={item.name}
                                timestamp={item.timestamp}
                                comment={item.comment}
                                id={item.id}
                                key={item.id}
                            />
                        })}
                    </section>

                    <section className="nextvid">
                        <h5 className="nextvid__title">next video</h5>
                        <div className="nextvid__grand-container">
                            {videoFilter.map(item => {
                                return <Nextvid
                                    image={item.image}
                                    title={item.title}
                                    channel={item.channel}
                                    id={item.id}
                                    key={item.id}
                                />
                            })}
                        </div>
                    </section>
                </main>
            </>
        )
    }
}
