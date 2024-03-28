import { ReactNode, createContext, useContext, useState } from "react"


type LayoutContextValue = {
    modalOpen: boolean, 
    toggleModal: () => void 
}

type LayoutContextProps = {
    children: ReactNode
}

const layoutContext = createContext({} as LayoutContextValue)


export function LayoutContextProvider({children}:LayoutContextProps){

    const [ modalOpen, setModalOpen ] = useState(false)

    const toggleModal = () => setModalOpen(prevState => !prevState)

    const value = {
        modalOpen, 
        toggleModal
    }

    return (
        <layoutContext.Provider value={value}>
            { children }
        </layoutContext.Provider>
    )
}

export function useLayoutContext(){
    return useContext(layoutContext)
}