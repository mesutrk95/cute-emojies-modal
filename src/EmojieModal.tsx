import React, { ComponentType, ReactNode } from 'react'
import { Emoji8 } from './emojies/emoji-8';

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
            <div className='emojie-container'><Emoji8 /></div>
            {titleElement}
            {bodyElement}

            <br />
            <button className='btn' onClick={() => close()}>Nice!</button>
        </div>
    )
}
