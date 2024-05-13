// import "./components/ui/button"
// import "./components/ui/carousel"

// import { Carousel, CarouselItem } from "@/components/ui/carousel.jsx";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AnimatedText from "./components/animatedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Globe from "./globe";

const WhyUnmute = () => {
  return (
      <div>
        <h1 className="mb-20 text-center text-7xl text-c-pur">About UnMute</h1>
        <div className="globe mb-40 flex justify-center content-center">
          <Globe className="mb-40 "></Globe>
        </div>
        <div className="whyUnmute flex content-center">
          <div className=" mx-auto flex flex-col">
            <div className="flex justify-center">
              <h1 className=" justify-center text-center py-16 text-7xl mb-44 text-c-pur ">
                <AnimatedText/>
              </h1>
            </div>
            <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
            >
              <CarouselContent className="mb-36 ">
                <CarouselItem className="w-80 h-80 ">
                  <div className="text-4xl text-center py-8 pb-24 text-c-pur">
                    Real-Time Social Connection:
                  </div>
                  <div className="text-4xl text-center py-8">
                    Instantly connects nearby users with shared interests for
                    spontaneous, meaningful social interactions, appealing to
                    those seeking immediate connections.
                  </div>
                </CarouselItem>
                <CarouselItem className="w-80 h-80">
                  <div className="text-4xl text-center py-8 pb-24 text-c-pur">
                    Privacy and Safety Features
                  </div>
                  <div className="text-4xl text-center py-8">
                    UnMute ensures user privacy and safety with optional location
                    sharing, verification processes, and reporting tools,
                    fostering trust and confidence.
                  </div>
                </CarouselItem>
                <CarouselItem className="w-80 h-80">
                  <div className="text-4xl text-center py-8 pb-24 text-c-pur">
                    Focused on common interests
                  </div>
                  <div className="text-4xl text-center py-8">
                    UnMute prioritizes shared interests, enabling users to connect
                    with like-minded individuals for meaningful conversations and
                    activities, fostering genuine connections.
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext/>
            </Carousel>
            <h1 className="justify-center text-center py-16 text-7xl mb-32">
              Steps to Socialize
            </h1>
            <div className="steps flex gap-10 ">
              <div className="w-96 h-96 bg-img1 rounded-lg ">
                <h1 className="text-center text-6xl pb-28">Step 1</h1>
                <p className="text-center text-5xl ">Tell Us Your Interest</p>
              </div>
              <div className="w-96 h-96 bg-img2 bg-auto rounded-lg mb-44">
                <h1 className="text-center text-6xl pb-28">Step 2</h1>
                <p className="text-center text-5xl ">
                  Find peple with same Interst
                </p>
              </div>
              <div className="w-96 h-96 bg-img3 rounded-lg">
                <h1 className="text-center text-6xl pb-28">Step 3</h1>
                <p className="text-center text-6xl ">UnMute YourSelf</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-50 my-24 h-72 bg-footer justify-center flex flex-col">
          <div className="text-center py-4 text-7xl">Contact Us</div>
          <div className="text-center py-8 text-4xl">
            Email : unmute@gmail.com
          </div>
        </div>
      </div>
  );
};

export default WhyUnmute;
