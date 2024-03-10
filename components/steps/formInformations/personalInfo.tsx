import { Typography } from "@/iu/typography/typography";
import { Button } from "../buttons/button";

interface props {
  formikVariable?: any;
}

export const PersonalInfo = ({ formikVariable }: props) => {
  // console.log(formikVariable.errors);

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
      <form
        className="flex flex-col gap-3 text-xs w-82"
        onSubmit={formikVariable.handleSubmit}
      >
        <div className="name flex flex-col">
          <label className=" text-primary-marime-blue text-xs" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            {...formikVariable.getFieldProps("name")}
            type="text"
            id="name"
            placeholder="e.g. Stepheng King"
            className="border focus:outline-none focus:border-primary-marime-blue hover:border-primary-marime-blue rounded-lg p-2"
          />
        </div>
        {formikVariable.errors.name && formikVariable.touched.name ? (
          <span className=" text-primary-strawberry-red text-xs text-end text-bold">
            {formikVariable.errors.name}
          </span>
        ) : (
          ""
        )}
        <div className="email flex flex-col">
          <label className=" text-primary-marime-blue text-xs" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            {...formikVariable.getFieldProps("email")}
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className=" border focus:outline-none focus:border-primary-marime-blue hover:border-primary-marime-blue rounded-lg p-2"
          />
        </div>
        {formikVariable.errors.email && formikVariable.touched.email ? (
          <span className=" text-primary-strawberry-red text-xs text-end text-bold">
            {formikVariable.errors.email}
          </span>
        ) : (
          ""
        )}
        <div className="flex flex-col">
          <label className=" text-primary-marime-blue text-xs" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            {...formikVariable.getFieldProps("phone")}
            id="phone"
            placeholder="e.g. 237 6 95 00 20 49"
            className=" border focus:outline-none focus:border-primary-marime-blue hover:border-primary-marime-blue rounded-lg p-2"
          />
        </div>
        {formikVariable.errors.phone && formikVariable.touched.phone ? (
          <span className=" text-primary-strawberry-red text-xs text-end text-bold">
            {formikVariable.errors.phone}
          </span>
        ) : (
          ""
        )}
        <div className="btn flex justify-end ">
          <Button type="submit" color="primary">
            <Typography component="span" size="small">
              Next step
            </Typography>
          </Button>
        </div>
      </form>
    </div>
  );
};
