import { Typography } from "@/iu/typography/typography";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "../buttons/button";

interface props {
  handleCheckedChange?: any; //changer l'etat du input checked ou pas
  isChecked?: any; //variable stockant la valeur du checked initialement
  elementsAddons?: any; //variable stockant le tableau des valeurs utilisees par le component add-on. le tableau proprement dite est dans le component index.tsx

  isCheckedPlan?: any; //variable stockant la valeur de isChecked dans le component plan. ca va nous aider ici pour connaitre si l'utilisateur a souscris au play month ou year
}
export const AddonsInfo = ({
  handleCheckedChange,
  isChecked,
  elementsAddons,
  isCheckedPlan,
}: props) => {
  return (
    <div className="main flex flex-col gap-10">
      <div className="header">
        <Typography
          component="h1"
          size="large"
          className=" text-primary-marime-blue"
        >
          Pick add-ons
        </Typography>
        <Typography
          component="span"
          size="small"
          className=" text-neutral-cool-gray"
        >
          add-ons help enhance your gaming experience.
        </Typography>
      </div>
      <div className="checklists flex flex-col gap-10">
        <div className="addons flex flex-col gap-2 w-[350px]">
          {elementsAddons.map((addon: any) => {
            return (
              <div
                className={clsx(
                  "addon flex justify-between items-center gap-2 cursor-pointer border rounded-lg p-3 hover:border-primary-marime-blue",
                  isChecked[addon.id] &&
                    " border-primary-purplish-blue bg-neutral-alabaster"
                )}
                key={addon.id}
              >
                <div className="left flex gap-2">
                  <input
                    type="checkbox"
                    checked={
                      isChecked[addon.id] || false
                    } /* en sachant que isChecked est un tableau d'elements, isChecked[1]= false ou true */
                    onChange={() => handleCheckedChange(addon.id)}
                  />
                  <div className="infos flex flex-col">
                    <Typography
                      component="h2"
                      size="small"
                      className=" text-primary-marime-blue"
                    >
                      {addon.title}
                    </Typography>
                    <Typography
                      size="extra-small"
                      component="span"
                      className=" text-neutral-light-gray"
                    >
                      {addon.sub_title}
                    </Typography>
                  </div>
                </div>
                <div className="right">
                  <Typography
                    component="span"
                    size="extra-small"
                    className=" text-primary-purplish-blue"
                  >
                    {isCheckedPlan
                      ? `+$${addon.price_year}/yr`
                      : `+$${addon.price}/mo`}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
