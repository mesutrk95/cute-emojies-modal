import React, { ComponentType, ReactNode } from 'react'

export const EmojieModal = ({ title, body, variant, close }:
    { title?: JSX.Element, body?: ComponentType<any>, variant: string, close: (data?: any) => void }) => {

    const bodyElement = body ? React.createElement(body, { close }) : null;
    const titleElement = title || <h3>{title}</h3>;

    return (
        <div className='modal-body'>
            {titleElement}
            {bodyElement}
            {variant}

            <button onClick={close}>Close</button>
        </div>
    )
}
