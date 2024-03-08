import { Typography } from "@/iu/typography/typography";

export const Finalsms = () => {
  return (
    <div className="main flex flex-col gap-4 justify-center items-center">
      <img src="/assets/images/icon-thank-you.svg" alt="" />
      <Typography
        component="h1"
        size="large"
        className=" text-primary-marime-blue"
      >
        Thank you!
      </Typography>
      <Typography
        component="p"
        size="small"
        className=" text-neutral-cool-gray text-center w-3/4"
      >
        Thanks for confirming your subcription! We hope you have fun using our
        platform. If you ever need support, please feel free to email as
        francodjoutsoppro@gmail.com.
      </Typography>
    </div>
  );
};
