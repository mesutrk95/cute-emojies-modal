
import { ComponentType } from 'react'
import { useModal } from './modal/useModal'
import { EmojieModal } from './EmojieModal'

export type DialogVariants =
    | 'mint-green'
    | 'orange'
    | 'light-purple'
    | 'purple'
    | 'light-blue'
    | 'yellow';

export type DialogEmoji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type DialogProps = {
    title?: JSX.Element | string,
    body?: ComponentType<any> | string,
    variant?: DialogVariants,
    emoji?: DialogEmoji
    buttonText?: string
}

export const useDialog = () => {
    const { show } = useModal()

    return ({ title, body, buttonText, variant, emoji }: DialogProps) =>
        show(EmojieModal, { title, body, buttonText, variant, emoji });
}