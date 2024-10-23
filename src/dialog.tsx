
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

export type DialogProps = {
    title?: JSX.Element | string,
    body?: ComponentType<any> | string,
    variant?: DialogVariants,
    emoji?: string | number
}

export const useDialog = () => {
    const { show } = useModal()

    return ({ title, body, variant, emoji }: DialogProps) =>
        show(EmojieModal, { title, body, variant, emoji });
}