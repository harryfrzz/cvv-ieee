import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Wrapper({children}: {children : ReactNode}){
    return(
        <>
        <div className="w-full flex justify-center">
            <Navbar/>
        </div>
            {children}
            <Footer/>
        </>
    )
}