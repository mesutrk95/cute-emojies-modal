
import { ComponentType } from 'react'
import { useModal } from './modal/useModal'
import { EmojieModal } from './EmojieModal'

export const useDialog = () => {
    const { show } = useModal()

    return ({ title, body, variant }: { title?: JSX.Element | string, body?: ComponentType<any> | string, variant?: string }) =>
        show(EmojieModal, { title, body, variant });
}
