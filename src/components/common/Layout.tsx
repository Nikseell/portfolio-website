import { type FC, type ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative pb-20 w-full">
      <Navigation />
      <div
        className="absolute top-0 left-0 right-0 h-screen -z-10"
        id="hero-background"
      ></div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
        <main className="flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20 max-w-[90rem] w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
