import React from "react";
import Img1 from "./gal/20231019_194404.jpg"
import Img2 from "./gal/20230220_174622.jpg"
import Img3 from "./gal/20230228_161615.jpg"
import Img4 from "./gal/397cb2e4-296d-4ec9-b971-450895660f44.jpg"
import Img5 from "./gal/88ea6e05-7af6-4cf5-98d0-43efc3fe473a.jpg"
import Img7 from "./gal/IMG20230220112013.jpg"
import Img6 from "./gal/IMG20230220174410.jpg"
import Img8 from "./gal/IMG20230220175247.jpg"
import About from "./About";

const Gallery = () => {
    return (
      
      <div className="bg-[#151414] pb-10">
        <About/>
        <h1 className="rog font-extrabold text-6xl text-center text-white">Gallery</h1>
        <div className="mx-auto px-5 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src={Img1}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src={Img2}
                />
              </div>
              <div className="w-full p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src={Img3}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src={Img4}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src={Img5}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src={Img6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;
