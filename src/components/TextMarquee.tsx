import React from "react";
import Marquee from "react-fast-marquee";
import Star from "../assets/Star.svg";

const TextMarquee: React.FC = () => {
  const roles = ["DEVELOPER", "DEBUGGER", "ARCHITECTOR"];

  return (
    <div className="w-full py-12">
      <Marquee
        speed={60}
        gradient={true}
        gradientColor={"black"}
        pauseOnHover={false}
        autoFill={true}
        className="overflow-hidden"
      >
        {roles.map((role, index) => (
          <div key={index} className="flex items-center gap-8 mx-4">
            <h1
              className="text-black text-5xl font-bold uppercase tracking-wider"
              style={{
                textShadow:
                  "1px 1px 0 #CBCBCB, -1px -1px 0 #CBCBCB, 1px -1px 0 #CBCBCB, -1px 1px 0 #CBCBCB",
              }}
            >
              {role}
            </h1>
            <img src={Star} alt="Star" className="w-12 h-auto" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TextMarquee;
