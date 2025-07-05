"use client";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import Logo from "../res/logo-web.png"
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
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Join IEEE</NavbarButton>
          </div>
        </NavBody>
      </ResizableNavbar>
    )
}