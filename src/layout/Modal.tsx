import { ReactNode } from "react"
import { useLayoutContext } from "./LayoutContext"

type ModalProps = {
    children:ReactNode
}

export default function Modal({ children }:ModalProps){

    const { modalOpen, toggleModal } = useLayoutContext()

    const modalOuterStyles = {
        opacity: modalOpen ? '1' : '0',
        pointerEvents: modalOpen ? 'auto' : 'none'
    } as React.CSSProperties

    return(
        <div 
            style={modalOuterStyles} 
            className="w-screen h-screen bg-green-500/75 absolute top-0 left-0 flex justify-center start-center p-20"
            onClick={toggleModal}
        >
            <div 
                onClick={ e => e.stopPropagation() }
                className="min-w-[250px] w-fit h-fit bg-gray-600 container mx-auto" 
            >
                { children }
            </div>
        </div>
    )
}