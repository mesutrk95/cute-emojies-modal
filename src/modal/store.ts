import { ReactNode } from "react";

let currentModal: ReactNode | null = null;
let listeners: (() => void)[] = [];

function emitChange() {
    for (let listener of listeners) {
        listener();
    }
}

export const modalsStore = {
    setCurrentModal(component: ReactNode) {
        currentModal = component
        emitChange();
    },
    subscribe(listener: () => void) {
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    },
    getSnapshot() {
        return currentModal;
    }
};