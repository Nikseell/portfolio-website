import { type FC } from "react";
import Beams from "../animations/Beam";

const Hero: FC = () => {
  return (
    <section className="min-h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="lightgray"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="flex flex-col min-h-screen px-8 max-w-[90rem] mx-auto">
        <div className="flex-1 flex items-center justify-center mt-26">
          <div className="text-center">
            <h1 className="text-white text-5xl leading-tight flex flex-col items-center gap-4">
              <div className="flex items-center gap-6">
                I AM A
                <div
                  className="w-26 h-16 rounded-full bg-cover bg-no-repeat border-2 border-white"
                  style={{
                    backgroundImage:
                      "url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzVkMGlyM2I1cW1kOXpyaHF6Yzc2NjEzcHU4MDRrazJkMWhvazlmMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2IudUHdI075HL02Pkk/giphy.gif)",
                    backgroundPosition: "center -22px",
                  }}
                ></div>
                DEVELOPER
              </div>
              <div className="flex items-center gap-6">
                WHO TURNS IDEAS INTO
              </div>
              <div className="flex items-center gap-6">DIGITAL MAGIC</div>
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-16 text-[#CBCBCB]">
          <div className="flex flex-wrap gap-8 lg:gap-16 xl:gap-32">
            <div className="text-white text-3xl" style={{ fontFamily: "Syne" }}>
              react
            </div>
            <div className="text-white text-3xl" style={{ fontFamily: "Syne" }}>
              nestjs
            </div>
            <div className="text-white text-3xl" style={{ fontFamily: "Syne" }}>
              unity
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-[#CBCBCB] text-lg leading-relaxed">
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
