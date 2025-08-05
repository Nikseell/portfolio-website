import { type FC, type ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen px-54 relative pb-20 flex flex-col items-center">
      <Navigation />
      <main className="flex flex-col gap-20 max-w-[90rem]">{children}</main>
    </div>
  );
};

export default Layout;
