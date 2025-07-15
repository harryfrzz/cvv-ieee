import Image from "next/image";
import oesLogo from "../res/IEEE OES Logo.png"
import csLogo from "../res/IEEE-CS_LogoTM-white.png"
import wieLogo from "../res/WIE_logo_purple_RGB_300.png"
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Societies(){
    return(
        <div className="flex flex-col lg:flex-row w-full min-h-[300px] h-auto justify-between items-center p-4 sm:p-6 md:p-8 lg:p-20 mb-6 sm:mb-8 lg:mb-10 bg-black gap-10 lg:gap-0">
            <TypingAnimation 
                startOnView 
                duration={60} 
                className="font-jetbrains-mono text-white text-4xl sm:text-3xl mt-10 md:mt-0 md:text-4xl lg:text-5xl tracking-tighter text-center lg:text-left"
            >
                Societies
            </TypingAnimation>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-20 mb-10 md:mb-0 items-center justify-center">
                <a href="https://ieeeoes.org/" className="block">
                    <Image 
                        src={oesLogo} 
                        className="h-16 w-32 sm:h-20 sm:w-40 lg:h-25 lg:w-50 hover:scale-110 transition ease-in object-contain" 
                        alt="oes logo"
                    />
                </a>
                <a href="https://www.computer.org/" className="block">
                    <Image 
                        src={csLogo} 
                        className="h-16 w-48 sm:h-20 sm:w-60 lg:h-25 lg:w-80 hover:scale-110 transition ease-in object-contain" 
                        alt="cs logo"
                    />
                </a>
                <a href="https://wie.ieee.org/" className="block">
                    <Image 
                        src={wieLogo} 
                        className="h-16 w-20 sm:h-20 sm:w-24 lg:h-25 lg:w-32 hover:scale-110 transition ease-in object-contain" 
                        alt="wie logo"
                    />
                </a>
            </div>
        </div>
    )
}