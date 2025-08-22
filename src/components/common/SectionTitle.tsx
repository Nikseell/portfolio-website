import { type FC } from "react";
import Star from "../../assets/Star.svg";

interface SectionTitleProps {
  children: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <h1 className="flex gap-2 text-heading-secondary font-bold md:mb-12 mb-6 text-white items-center ">
      <img src={Star} alt="Star" className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 flex" />
      {children}
    </h1>
  );
};

export default SectionTitle;
