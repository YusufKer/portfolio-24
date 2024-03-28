import { ReactNode } from "react"
import { LayoutContextProvider } from "./LayoutContext"
import Header from "./Header"
import Footer from "./Footer"
import Modal from "./Modal"
import Contact from "../pages/Contact"

type LayoutProps = {
    children:ReactNode
}

export default function Layout({children}:LayoutProps){

    return(
        <LayoutContextProvider>
            <div className="relative">
                <Header/>
                <div className="container mx-auto">
                    { children }
                </div>
                <Modal>
                    <Contact/>
                </Modal>
                <Footer/>
            </div>
        </LayoutContextProvider>
    )
}