import { type FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col gap-8">
      <h1 className="text-white text-5xl leading-tight flex flex-col items-center gap-4 uppercase">
        Let's talk!
      </h1>
      <p className="text-white text-center text-lg">
        <a href="mailto:niklavs.laicans@gmail.com" className="text-white">
          niklavs.laicans@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
