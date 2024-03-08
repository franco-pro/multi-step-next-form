import { Typography } from "@/iu/typography/typography";
import clsx from "clsx";

interface props {
  stepValue: number; //cette variable va me permettre de stocker la valeur du stepHeader en fonction de l'etat actuel des chose
}
export const Steps = ({ stepValue }: props) => {
  const stepsElement = [
    {
      id: 1,
      title: "step 1",
      sub_title: "Your info",
    },
    {
      id: 2,
      title: "step 2",
      sub_title: "Select Plan",
    },
    {
      id: 3,
      title: "step 3",
      sub_title: "Add-ons",
    },
    {
      id: 4,
      title: "step 4",
      sub_title: "Summary",
    },
  ];
  // console.log("step :", stepValue);

  return (
    <div className="main flex flex-col gap-5 relative ml-5 mt-7 items-start align-top justify-start uppercase">
      {stepsElement.map((element) => {
        return (
          <div key={element.id} className="main flex gap-3 w-32">
            <div
              className={clsx(
                "numbers rounded-full w-5 h-5 border border-white relative",
                stepValue === element.id && "bg-primary-light-blue"
              )}
            >
              <Typography
                size="extra-small"
                component="span"
                className={clsx(
                  "absolute  top-[1.6px] left-[6.4px] text-white font-bold",
                  stepValue === element.id && "text-black"
                )}
              >
                {element.id}
              </Typography>
            </div>
            <div className="infos flex flex-col text-white">
              <Typography
                size="extra-small"
                component="h2"
                className=" text-neutral-light-gray"
              >
                {element.title}
              </Typography>
              <Typography size="small" component="span">
                {element.sub_title}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};
