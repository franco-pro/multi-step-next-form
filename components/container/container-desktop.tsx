import React from "react";
import clsx from "clsx";
import { Steps } from "../steps/step-design";

interface props {
  children: React.ReactNode;
  className?: string;
  stepHeader: number; //cette valeur va me permettre de sauvegarder l'etat du step qui est dans index.tsx
}

export const ContainerDesktop = ({
  children,
  className,
  stepHeader,
}: props) => {
  return (
    <div
      className={clsx(
        "w-[700px] h-[450px] border flex items-center m-auto rounded-xl bg-white border-none shadow-2xl"
      )}
    >
      <div
        className="bg_steps w-[200px] h-[95%] ml-3 rounded-xl bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/bg-sidebar-desktop.svg')",
        }}
      >
        <Steps stepValue={stepHeader} />
      </div>
      <div className={clsx("", className)}>{children}</div>
    </div>
  );
};
