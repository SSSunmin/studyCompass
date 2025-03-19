import { useAtom } from 'jotai';
import { modalAtom } from '@/jotai/common/atom.ts';

export const useModal = () => {
    const [, setModal] = useAtom(modalAtom);

    const openModal = (content: React.ReactNode) => {
        setModal({ isOpen: true, content });
    };

    const closeModal = () => {
        setModal({ isOpen: false, content: null });
    };

    return { openModal, closeModal };
};