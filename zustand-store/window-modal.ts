import {create} from 'zustand'

interface UseWindowModal {
    isModal:boolean;
    openModal:() => void;
    closeModal:() => void
}



export const useWindowModal = create<UseWindowModal>((set)=> ({
    isModal:false,
    openModal:() => set(() => ({isModal:true})),
    closeModal:() => set(() => ({isModal:false}))
}))

