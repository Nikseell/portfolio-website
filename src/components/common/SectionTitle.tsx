import { type FC } from "react";
import Star from "../../assets/Star.svg";

interface SectionTitleProps {
  children: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <h1 className="flex gap-2 text-4xl font-bold mb-12">
      <img src={Star} alt="Star" className="w-10 h-10" />
      {children}
    </h1>
  );
};

export default SectionTitle;
