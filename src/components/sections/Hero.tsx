import { type FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Beams from "../animations/Beam";

const Hero: FC = () => {
  const [heroBackground, setHeroBackground] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    const element = document.getElementById("hero-background");
    setHeroBackground(element);
  }, []);

  return (
    <section className="min-h-screen relative">
      {heroBackground &&
        createPortal(
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="lightgray"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />,
          heroBackground
        )}

      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-26">
          <div className="text-center">
            <h1 className="text-white text-heading-primary leading-tight text-center">
              <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6">
                  <span>I AM A</span>
                  <div
                    className="hidden md:block w-16 h-12 sm:w-18 sm:h-14 md:w-24 md:h-16 lg:w-26 lg:h-16 rounded-full bg-cover bg-no-repeat border-2 border-white flex-shrink-0"
                    style={{
                      backgroundImage:
                        "url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzVkMGlyM2I1cW1kOXpyaHF6Yzc2NjEzcHU4MDRrazJkMWhvazlmMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2IudUHdI075HL02Pkk/giphy.gif)",
                      backgroundPosition: "center -22px",
                    }}
                  ></div>
                  <span>DEVELOPER</span>
                </div>
                <div>WHO TURNS IDEAS INTO</div>
                <div>DIGITAL MAGIC</div>
              </div>
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 pb-8 sm:pb-12 md:pb-16 text-[#CBCBCB] w-full">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            <div
              className="text-white text-accent"
              style={{ fontFamily: "Syne" }}
            >
              react
            </div>
            <div
              className="text-white text-accent"
              style={{ fontFamily: "Syne" }}
            >
              nestjs
            </div>
            <div
              className="text-white text-accent"
              style={{ fontFamily: "Syne" }}
            >
              unity
            </div>
          </div>

          <div className="max-w-xl lg:max-w-sm xl:max-w-md">
            <p className="text-[#CBCBCB] text-body leading-relaxed text-center lg:text-left">
              Welcome to my portfolio. Here, artistry meets functionality. Dive
              into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
