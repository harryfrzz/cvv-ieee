import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import Logo from "../res/web-logo.png"
import Logo2 from "../res/ieee_mb_white.png"
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black w-full min-h-[250px] h-auto text-white flex flex-col lg:flex-row items-center lg:items-center border-t border-[rgb(32,32,32)] justify-between px-4 sm:px-6 md:px-8 lg:px-24 py-6 lg:py-0 gap-6 lg:gap-0">
      
      {/* Logo Section */}
      <div className="flex w-full lg:w-41 flex-row justify-center sm:flex-col items-start lg:items-start gap-4 lg:gap-8">
        <Image src={Logo} alt="cvv ieee logo" className="w-32 sm:w-36 lg:w-41"/>
        <Image src={Logo2} alt="cvv ieee logo" className="w-24 sm:w-28 lg:w-30"/>
      </div>
      
      {/* Center Content */}
      <div className="flex flex-col items-center space-y-3 lg:space-y-4 text-center">
        <h3 className="text-lg sm:text-xl font-jetbrains-mono font-semibold text-white">IEEE SB CVV</h3>
        <p className="text-gray-400 font-jetbrains-mono text-center max-w-md text-sm sm:text-base">
          Innovate. Empower. Build.
        </p>
        <div className="text-gray-500 font-jetbrains-mono text-xs sm:text-sm">
          © 2025 Made with ❤️ by IEEE SB CVV.
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-center lg:items-start space-y-3 lg:space-y-4 font-jetbrains-mono">
        <h4 className="text-base sm:text-lg text-white mb-2 lg:mb-4">Connect With Us</h4>
        
        <a 
          href="https://www.linkedin.com/company/105313208/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
        >
          <TfiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-sm sm:text-base">LinkedIn</span>
        </a>

        <a 
          href="https://www.instagram.com/ieeecvvist/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-400 hover:text-orange-400 transition-colors duration-200"
        >
          <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-sm sm:text-base">Instagram</span>
        </a>

        <a 
          href="mailto:ieeesbcvv@gmail.com" 
          className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200"
        >
          <MdOutlineMailOutline className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-sm sm:text-base">Email Us</span>
        </a>
      </div>
    </div>
  );
}