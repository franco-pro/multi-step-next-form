import { Typography } from "@/iu/typography/typography";
import { Button } from "../buttons/button";
import { useState } from "react";
import clsx from "clsx";
import { SwitchToggle } from "@/components/switch";

interface props {
  handleChangeSelectFunction?: any;
  isSelect?: any;
  isChecked?: boolean;
  handleChangeCheckedFunction?: any;
}
export const PlanInfo = ({
  handleChangeCheckedFunction,
  handleChangeSelectFunction,
  isChecked,
  isSelect,
}: props) => {
  const elementsPlan = [
    {
      id: 1,
      logo: "/assets/images/icon-arcade.svg",
      title: "Acarde",
      price: 9,
      priceYear: 90,
    },
    {
      id: 2,
      logo: "/assets/images/icon-advanced.svg",
      title: "Advanced",
      price: 12,
      priceYear: 120,
    },
    {
      id: 3,
      logo: "/assets/images/icon-pro.svg",
      title: "Pro",
      price: 15,
      priceYear: 150,
    },
  ];

  return (
    <div className="main flex flex-col gap-10">
      <div className="header">
        <Typography
          component="h1"
          size="large"
          className=" text-primary-marime-blue"
        >
          Select your plan
        </Typography>
        <Typography
          component="span"
          size="small"
          className=" text-neutral-cool-gray"
        >
          You have the option of monthlly or yearly billing.
        </Typography>
      </div>

      <div className="checklists flex flex-col gap-5 ">
        <section className="flex gap-2">
          {elementsPlan.map((element) => {
            return (
              <div
                onClick={() => handleChangeSelectFunction(element.id)}
                className={clsx(
                  "w-28 h-36 p-5 flex flex-col justify-between gap-10 border rounded-lg focus:border-primary-marime-blue hover:border-primary-marime-blue cursor-pointer",
                  isSelect === element.id &&
                    "border border-primary-marime-blue bg-neutral-alabaster",
                  isChecked && "h-40"
                )}
                key={element.id}
              >
                <div className="logo flex">
                  <img src={element.logo} alt="" />
                </div>
                <div className="infos flex flex-col">
                  <Typography
                    component="h2"
                    size="small"
                    className=" text-primary-marime-blue"
                  >
                    {element.title}
                  </Typography>
                  <Typography
                    component="p"
                    size="extra-small"
                    className=" text-neutral-cool-gray"
                  >
                    $
                    {isChecked
                      ? element.priceYear + "/yr"
                      : element.price + "/mo"}
                  </Typography>
                  {isChecked && (
                    <Typography
                      component="p"
                      size="extra-small"
                      className={clsx(" text-primary-marime-blue font-bold")}
                    >
                      2 months free
                    </Typography>
                  )}
                </div>
              </div>
            );
          })}
        </section>
        <section className="w-full min-h-10 bg-neutral-magnolia flex justify-center items-center gap-3">
          <Typography
            component="span"
            size="small"
            className={clsx(
              " text-neutral-cool-gray font-bold",
              isChecked == false &&
                "text-primary-marime-blue transition-all duration-500"
            )}
          >
            Monthly
          </Typography>
          <SwitchToggle
            isCheckedValue={isChecked}
            handleChange={handleChangeCheckedFunction}
          />
          <Typography
            component="span"
            size="small"
            className={clsx(
              " text-neutral-cool-gray font-bold",
              isChecked &&
                "text-primary-marime-blue transition-all duration-500"
            )}
          >
            Yearly
          </Typography>
        </section>
      </div>
    </div>
  );
};
