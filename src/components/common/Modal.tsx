import { useAtom } from 'jotai';
import { modalAtom } from '@/jotai/common/atom.ts';
import {X} from "lucide-react";

const Modal = () => {
    const [modal, setModal] = useAtom(modalAtom);

    if (!modal.isOpen) return null;

    const closeModal = () => {
        setModal({ isOpen: false, content: null });
    };

    return (
        <div  className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-md">
                <X  className={"ml-auto cursor-pointer"} onClick={closeModal}/>
                <div className="mb-4">{modal.content}</div>
                {/*<div className="flex justify-end">*/}
                {/*    <button*/}
                {/*        onClick={closeModal}*/}
                {/*        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-200"*/}
                {/*    >*/}
                {/*        닫기*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Modal;