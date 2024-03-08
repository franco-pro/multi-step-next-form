import { Typography } from "@/iu/typography/typography";
import { AddonsInfo } from "./formInformations/addonsInfo";
import { PersonalInfo } from "./formInformations/personalInfo";
import { PlanInfo } from "./formInformations/planInfo";
import { SummaryInfo } from "./formInformations/summaryInfo";

export const StepsBody = () => {
  const stepsBodyElements = [
    {
      id: 1,
      title: "Personal Info",
      sub_title: "Please provide your name, email adress , and phone number",
      component: <PersonalInfo handleChangeFunction formData />,
    },
    {
      id: 2,
      title: "Select your plan",
      sub_title: "you have the option of monthly or yearly billing",
      component: <PlanInfo />,
    },
    {
      id: 3,
      title: "Pick add-ons",
      sub_title: "Add-ons help enhance your gaming experience",
      component: <AddonsInfo />,
    },
    {
      id: 4,
      title: "Finishing up",
      sub_title: "Double-check everything looks ok before confirming",
      component: <SummaryInfo />,
    },
  ];

  return (
    <div className="main flex flex-col gap-2">
      {stepsBodyElements.map((stepBody) => {
        return (
          <div className="steps" key={stepBody.id}>
            <div className="header flex flex-col">
              <Typography
                component="h1"
                size="medium"
                className=" text-primary-marime-blue"
              >
                {stepBody.title}
              </Typography>
              <Typography
                component="span"
                size="small"
                className=" text-neutral-light-gray"
              >
                {stepBody.sub_title}
              </Typography>
            </div>
            <div className="components">{stepBody.component}</div>
            <div className="btn"></div>
          </div>
        );
      })}
    </div>
  );
};
