import clsx from "clsx";
import { useState } from "react";

interface props {
  isCheckedValue: boolean;
  handleChange: () => void;
}
export const SwitchToggle = ({ isCheckedValue, handleChange }: props) => {
  return (
    <label htmlFor="switch" className="switch relative w-10 h-5 ">
      <input
        type="checkbox"
        checked={isCheckedValue}
        onChange={handleChange}
        id="switch"
        className=" opacity-0 w-0 h-0"
      />
      <span
        className={clsx(
          "slider absolute rounded-full top-0 left-0 right-0 bottom-0 bg-primary-marime-blue cursor-pointer before:rounded-full before:absolute before:h-3 before:w-3 before:left-1 before: before:bottom-1 before:bg-white before:transition before:duration-700",
          isCheckedValue && " before:transform before:translate-x-5"
        )}
      ></span>
    </label>
  );
};
