
"use client";

import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import Wrapper from "../Components/Wrapper";

export default function Gallery() {
  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
    "/gallery/13.jpg",
    "/gallery/14.jpg",
    "/gallery/15.jpg",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
    "/gallery/18.jpg",
    "/gallery/19.jpg",
    "/gallery/20.jpg",
    "/gallery/21.jpg",
    "/gallery/22.jpg",
    "/gallery/23.jpg",
    "/gallery/24.jpg",
    "/gallery/25.jpg",
    "/gallery/26.jpg",
    "/gallery/27.jpg",
    "/gallery/28.jpg",
    "/gallery/29.jpg",
    "/gallery/30.jpg",
    "/gallery/31.jpg",
    "/gallery/32.jpg",
    "/gallery/33.jpg",
  ];

  return (
    <BlurFade delay={0.25} inView>
      <Wrapper curIndex={3}> {/* keeps nav bar active on Gallery tab */}
        <div className="w-full min-h-screen flex flex-col p-4 sm:p-6 md:p-8 lg:p-20">
          {/* Title */}
          <div className="flex w-full justify-center sm:justify-between items-center mt-20 sm:mt-6 lg:mt-8 mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-jetbrains-mono tracking-tighter">
              Gallery
            </h1>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[rgb(32,32,32)] hover:border-[rgb(54,54,54)] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  quality={70}
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </BlurFade>
  );
}