import { type FC } from "react";

interface HeroProps {
  isFullPage?: boolean;
  showScrollIndicator?: boolean;
}

const Hero: FC<HeroProps> = () => {
  return <section className="min-h-screen relative"></section>;
};

export default Hero;
