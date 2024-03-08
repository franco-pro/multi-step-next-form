import clsx from "clsx";

interface props {
  children: React.ReactNode;
  className?: string;
  size: "extra-small" | "small" | "medium" | "large";
  component: "h1" | "h2" | "h3" | "div" | "p" | "span";
}

export const Typography = ({
  className,
  children,
  size = "medium",
  component: Component = "div",
}: props) => {
  let sizeValues = "";
  let colorStyles = "";

  //different size in design
  switch (size) {
    case "extra-small":
      sizeValues = "text-[10px] font-light";
      break;
    case "small":
      sizeValues = "text-xs font-normal";
      break;

    case "medium":
      sizeValues = "text-base font-medium";
      break;

    case "large":
      sizeValues = "text-2xl font-bold";
  }

  return (
    <Component className={clsx("", sizeValues, className)}>
      {children}
    </Component>
  );
};
