import React, { ComponentType, ReactNode } from "react";
import { Emoji } from "./emojies";
import { Star } from "./emojies/star";
import { useSpring, animated, config, easings } from "@react-spring/web";

const getBody = (
    body?: ComponentType<any> | ReactNode | string, 
    close?: (data?: any) => void) => {
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
      return <h5 className="title">{title}</h5>;
    default:
      return title;
  }
};

export const EmojieModal = ({
  title,
  body,
  buttonText,
  variant,
  emoji,
  close,
}: {
  title?: JSX.Element | string;
  body?: ComponentType<any> | string;
  buttonText?: string;
  variant?: string;
  close: (data?: any) => void;
  emoji?: number | string;
}) => {
  const bodyElement = getBody(body, close);
  const titleElement = getTitle(title);

  // // Animation for the modal
  // const [emojiSpring, emojiApi] = useSpring(() => ({
  //     from: { transform: "scale(60%)" },
  //     config: { ...config.gentle },
  // }));
  // useEffect(() => {
  //     emojiApi.start({
  //         to: { transform: "scale(100%)" },
  //         config: { ...config.wobbly, easing: easings.easeOutBounce, duration: 200 },
  //         delay: 200
  //     });
  // }, []);

  return (
    <div className={`modal-body ${variant}`}>
      <div className="emoji-container">
        <div className="dot left-1"></div>
        <div className="dot left-2"></div>
        <div className="dot left-3"></div>
        <div className="dot right-1"></div>
        <div className="dot right-2"></div>
        <div className="dot right-3"></div>
        <Star className="dot star-1" />
        <Star className="dot star-2" />
        <Emoji index={emoji || 10} />
      </div>
      {titleElement}
      {bodyElement}
      <button className="btn" onClick={() => close()}>
        {buttonText || "Close"}
      </button>
    </div>
  );
};
