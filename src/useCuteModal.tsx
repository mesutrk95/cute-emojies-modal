
import { ComponentType } from 'react'
import { useModal } from './modal/useModal'
import { EmojieModal } from './EmojieModal'

export type ModalVariants =
    | 'mint-green'
    | 'orange'
    | 'light-purple'
    | 'purple'
    | 'light-blue'
    | 'yellow';

export type ModalEmoji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type ModalProps = {
    title?: JSX.Element | string,
    body?: ComponentType<any> | string,
    variant?: ModalVariants,
    emoji?: ModalEmoji
    buttonText?: string
}

export const useCuteModal = () => {
    const { show } = useModal()

    return ({ title, body, buttonText, variant, emoji }: ModalProps) =>
        show(EmojieModal, { title, body, buttonText, variant, emoji });
}