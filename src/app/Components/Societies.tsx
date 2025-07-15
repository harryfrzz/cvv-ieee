import Image from "next/image";
import oesLogo from "../res/IEEE OES Logo.png"
import csLogo from "../res/IEEE-CS_LogoTM-white.png"
import wieLogo from "../res/WIE_logo_purple_RGB_300.png"
import { TypingAnimation } from "@/components/magicui/typing-animation";
export default function Societies(){
    return(
        <div className="flex flex-row w-full h-[300px] justify-between items-center p-20 mb-10 bg-black">
            <TypingAnimation startOnView duration={60} className="font-jetbrains-mono text-white text-5xl tracking-tighter">Societies</TypingAnimation>
            <div className="flex gap-20">
                <a href="https://ieeeoes.org/"><Image src={oesLogo} className="h-25 w-50 hover:scale-110 transition ease-in" alt="oes logo"/></a>
                <a href="https://www.computer.org/"><Image src={csLogo} className="h-25 w-80 hover:scale-110 transition ease-in" alt="cs logo"/></a>
                <a href="https://wie.ieee.org/"><Image src={wieLogo} className="h-25 w-32 hover:scale-110 transition ease-in" alt="wie logo"/></a>
                
            </div>
            
        </div>
    )
}