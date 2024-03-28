import { Link } from "react-router-dom"
import { useLayoutContext } from "./LayoutContext"

export default function Header(){

    const {toggleModal} = useLayoutContext()

    return(
        <div className="bg-gray-700">
            <div className="p-4 container mx-auto flex justify-between">
                <Link to="/">
                    <img src="" alt="home" />
                </Link>
                <div className="flex gap-4">
                    <Link to="/about">About</Link>
                    <Link to="/work">Work</Link>
                    <button onClick={toggleModal}>Contact</button>
                </div>
            </div>
        </div>
    )
}