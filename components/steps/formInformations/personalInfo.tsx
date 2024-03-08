import { Typography } from "@/iu/typography/typography";
import { useState } from "react";

interface props {
  handleChangeFunction: any;
  formData: any;
}
//handleChangeFunction formData, handleSubmitFunction ce sont les props qui prennent les valeurs respectives de la fonction handleChange, le tableau formaData et la function de soumission de formulaire
export const PersonalInfo = ({ handleChangeFunction, formData }: props) => {
  // console.log(formData);

  return (
    <div className="main flex flex-col gap-10">
      <div className="header">
        <Typography
          component="h1"
          size="large"
          className=" text-primary-marime-blue"
        >
          Personnal info
        </Typography>
        <Typography
          component="span"
          size="small"
          className=" text-neutral-cool-gray"
        >
          Please provide yoour name, email address , and phone number
        </Typography>
      </div>
      <form className="flex flex-col gap-3 text-xs w-82">
        <div className="name flex flex-col">
          <label className=" text-primary-marime-blue text-xs" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChangeFunction}
            type="text"
            id="name"
            required
            placeholder="e.g. Stepheng King"
            className="border focus:outline-none focus:border-primary-marime-blue hover:border-primary-marime-blue rounded-lg p-2"
          />
        </div>
        <div className="email flex flex-col">
          <label className=" text-primary-marime-blue text-xs" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeFunction}
            id="email"
            required
            placeholder="e.g. stephenking@lorem.com"
            className=" border focus:outline-none focus:border-primary-marime-blue hover:border-primary-marime-blue rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-primary-marime-blue text-xs" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChangeFunction}
            id="phone"
            required
            placeholder="e.g. +237 6 95 00 20 49"
            className=" border focus:outline-none focus:border-primary-marime-blue hover:border-primary-marime-blue rounded-lg p-2"
          />
        </div>
      </form>
    </div>
  );
};
