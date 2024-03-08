import { clsx } from "clsx";

interface props {
  type: "reset" | "button" | "submit";
  color: "primary" | "neutral";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  color,
  type,
  onClick,
}: props) => {
  let colorValues = "";
  switch (color) {
    case "primary":
      colorValues =
        "bg-primary-purplish-blue hover:bg-primary-marime-blue text-neutral-magnolia";
      break;
    case "neutral":
      colorValues =
        "text-neutral-cool-gray font-bold hover:text-primary-marime-blue, bg-neutral-alabaster";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("w-20 p-2 rounded-lg", colorValues, className)}
    >
      {children}
    </button>
  );
};
