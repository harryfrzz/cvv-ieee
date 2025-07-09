"use client";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import Logo from "../res/web-logo.png"
import Image from "next/image";
import GlareHover from "../../../ReactBits/GlareHover/GlareHover";

export default function Navbar({activeIndex}: {activeIndex : number}){
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Events",
      link: "/Events",
    },
    {
      name: "Execom",
      link: "/Execom",
    },
    {
      name: "Gallery",
      link: "/Gallery",
    },
    {
      name: "About",
      link: "/About"
    }
  ];
    return(
     <ResizableNavbar>
        <NavBody>
          <Image src={Logo} alt="cvv ieee logo" className="w-32"/>
          <NavItems className="font-jetbrains-mono" items={navItems} activeIndex={activeIndex} />
          
          <GlareHover className="text-white font-jetbrains-mono tracking-tighter px-2 text-sm" width="110px" height="40px">
           Join IEEE
          </GlareHover>
        </NavBody>
      </ResizableNavbar>
    )
}