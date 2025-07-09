import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Wrapper({children, curIndex}: {children : ReactNode, curIndex: number}){
    return(
        <>
        <div className="w-full flex justify-center">
            <Navbar activeIndex={curIndex}/>
        </div>
            {children}
            <Footer/>
        </>
    )
}