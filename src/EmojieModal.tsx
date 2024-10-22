import React, { ComponentType, ReactNode } from 'react'
import { Emoji8 } from './emojies/emoji-8';
import { Star } from './emojies/star';
import { Emoji10 } from './emojies/emoji-10';

const getBody = (body?: ComponentType<any> | ReactNode | string) => {

    switch (typeof body) {
        case 'string': return <p className='body'>{body}</p>;
        default:
            return React.createElement(body as ComponentType<any>, { close })
    }
}
const getTitle = (title?: ReactNode | string) => {
    switch (typeof title) {
        case 'string': return <h2 className='title'>{title}</h2>;
        default:
            return title
    }
}

export const EmojieModal = ({ title, body, variant, close }:
    { title?: JSX.Element | string, body?: ComponentType<any> | string, variant?: string, close: (data?: any) => void }) => {

    const bodyElement = getBody(body);
    const titleElement = getTitle(title)

    return (
        <div className={`modal-body ${variant}`}>
            <div className='emojie-container'>
                <div className='dot left-1'></div>
                <div className='dot left-2'></div>
                <div className='dot left-3'></div> 
                <div className='dot right-1'></div>
                <div className='dot right-2'></div>
                <div className='dot right-3'></div> 
                <Star className="dot star-1" />
                <Star className="dot star-2" />
                <Emoji10 />
            </div>
            {titleElement}
            {bodyElement}

            <br />
            <button className='btn' onClick={() => close()}>Nice!</button>
        </div>
    )
}
