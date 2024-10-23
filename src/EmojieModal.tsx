import React, { ComponentType, ReactNode, useEffect, } from 'react'
import { Emoji8 } from './emojies/emoji-8';
import { Star } from './emojies/star';
import { Emoji10 } from './emojies/emoji-10';
import { useSpring, animated, config } from "@react-spring/web";

const getBody = (body?: ComponentType<any> | ReactNode | string) => {
    switch (typeof body) {
        case "string":
            return <p className="body">{body}</p>;
        default:
            return React.createElement(body as ComponentType<any>, { close });
    }
};
const getTitle = (title?: ReactNode | string) => {
    switch (typeof title) {
        case "string":
            return <h2 className="title">{title}</h2>;
        default:
            return title;
    }
};

export const EmojieModal = ({
    title,
    body,
    variant,
    close,
}: {
    title?: JSX.Element | string;
    body?: ComponentType<any> | string;
    variant?: string;
    close: (data?: any) => void;
}) => {
    const bodyElement = getBody(body);
    const titleElement = getTitle(title);

    // Animation for the modal
    const [emojiSpring, emojiApi] = useSpring(() => ({
        from: { transform: "scale(60%)" },
        config: { ...config.gentle },
    }));
    useEffect(() => {
        emojiApi.start({
            to: { transform: "scale(100%)" },
            config: { ...config.wobbly, duration: 200 },
            delay: 200
        });
    }, []);

    return (
        <div className={`modal-body ${variant}`}>
            {/* <div className="emojie-container"> */}
            <animated.div
                className="emojie-container"
                style={{
                    ...emojiSpring,
                }}
            >
                <div className='dot left-1'></div>
                <div className='dot left-2'></div>
                <div className='dot left-3'></div>
                <div className='dot right-1'></div>
                <div className='dot right-2'></div>
                <div className='dot right-3'></div>
                <Star className="dot star-1" />
                <Star className="dot star-2" />
                <Emoji8 />
            </animated.div>
            {/* </div> */}
            {titleElement}
            {bodyElement}

            <br />
            <button className="btn" onClick={() => close()}>
                Nice!
            </button>
        </div>
    );
};
