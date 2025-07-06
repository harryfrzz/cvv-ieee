"use client";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import Logo from "../res/web-logo.png"
import Image from "next/image";

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

    return(
     <ResizableNavbar>
        <NavBody>
          <Image src={Logo} alt="cvv ieee logo" className="w-32"/>
          <NavItems className="font-jetbrains-mono" items={navItems} activeIndex={0} />
          <div className="flex items-center gap-4">
          </div>
        </NavBody>
      </ResizableNavbar>
    )
}