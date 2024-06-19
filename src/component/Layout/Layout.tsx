import { ReactNode } from "react";
import Menu from "../menu/Menu";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen bg-fontPage py-8 px-8 gap-7">
      <Menu />
      <div className="w-full h-full bg-white flex px-8 py-8 gap-7 rounded-lg">
        {children}
      </div>
      
    </div>
  );
}

export default Layout;
