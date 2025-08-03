import { type FC, type ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen px-54 relative pb-20">
      <Navigation />
      <main className="flex flex-col gap-20">{children}</main>
    </div>
  );
};

export default Layout;
