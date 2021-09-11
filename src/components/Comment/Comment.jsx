import React from 'react'
import './Comments.scss';

export default function Comment(props) {
    return (
        //renders the comment section, receiving props from Main component, with date object formated to correct time format
        <div className="vidinfo__comments">
            <div>
                <hr className="vidinfo__comments__divider"
                />
                <div className="vidinfo__comments__grand-container"
                >
                    <div
                        className="vidinfo__comments__img"
                    >
                    </div>

                    <div className="vidinfo__comments__container"
                    >
                        <div
                            className="vidinfo__comments__name-container"
                        >
                            <h4
                                className="vidinfo__comments__name-container__name"
                            >
                                {props.name}
                            </h4>
                            <h4
                                className="vidinfo__comments__name-container__date"
                            >
                                {new Date(props.timestamp).toLocaleDateString()}
                            </h4>
                        </div>

                        <h4
                            className="vidinfo__comments__content"
                        >
                            {props.comment}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
