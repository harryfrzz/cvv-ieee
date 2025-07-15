import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import Logo from "../res/web-logo.png"
import Logo2 from "../res/ieee_mb_white.png"
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black w-full h-[250px] text-white flex items-center border-t border-[rgb(32,32,32)] justify-between px-8 md:px-10 lg:px-24">
      <div className="flex w-41 flex-col gap-8">
          <Image src={Logo} alt="cvv ieee logo" className="w-41"/>
          <Image src={Logo2} alt="cvv ieee logo" className="w-30"/>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-xl font-jetbrains-mono font-semibold text-white">IEEE SB CVV</h3>
        <p className="text-gray-400 font-jetbrains-mono text-center max-w-md">
         Innovate. Empower. Build.
        </p>
        <div className="text-gray-500 font-jetbrains-mono text-sm">
          © 2025 Made with ❤️ by IEEE SB CVV.
        </div>
      </div>


      <div className="flex flex-col space-y-4 font-jetbrains-mono">
        <h4 className="text-lg text-white mb-4">Connect With Us</h4>
        

        <a 
          href="https://www.linkedin.com/company/105313208/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
        >
          <TfiLinkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>


        <a 
          href="https://www.instagram.com/ieeecvvist/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-400 hover:text-orange-400 transition-colors duration-200"
        >
          <FaInstagram className="w-6 h-6" />
          <span>Instagram</span>
        </a>


        <a 
          href="mailto:ieeesbcvv@gmail.com" 
          className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200"
        >
          <MdOutlineMailOutline className="w-6 h-6" />
          <span>Email Us</span>
        </a>
      </div>
    </div>
  );
}