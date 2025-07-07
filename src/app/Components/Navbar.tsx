"use client";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import Logo from "../res/web-logo.png"
import Image from "next/image";
import GlareHover from "../../../ReactBits/GlareHover/GlareHover";

export default function Navbar(){
  const navItems = [
    {
      name: "Home",
      link: "#features",
    },
    {
      name: "Events",
      link: "#pricing",
    },
    {
      name: "Gallery",
      link: "#contact",
    },
  ];
// <div className="flex w-auto px-4 py-2 rounded-full justify-center items-center bg-white">Join IEEE</div>
    return(
     <ResizableNavbar>
        <NavBody>
          <Image src={Logo} alt="cvv ieee logo" className="w-32"/>
          <NavItems className="font-jetbrains-mono" items={navItems} activeIndex={0} />
          
          <GlareHover className="text-white font-jetbrains-mono tracking-tighter px-2 text-sm" width="110px" height="40px">
           Join IEEE
          </GlareHover>
        </NavBody>
      </ResizableNavbar>
    )
}