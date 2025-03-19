import { atom } from 'jotai';

interface ModalState {
    isOpen: boolean;
    content: React.ReactNode;
}

export const modalAtom = atom<ModalState>({
    isOpen: false,
    content: null,
});