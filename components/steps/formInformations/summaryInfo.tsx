import { Typography } from "@/iu/typography/typography";
import { Button } from "../buttons/button";
import Link from "next/link";

interface props {
  link: () => void; //condition pour retourner au step 2
  arraySummary: any; //variable qui va stocker les elements qui sont stocker dans chooseInfos
  elementsAddons: any; //variable qui stocke le tableau des elemenent addons
}
export const SummaryInfo = ({ link, arraySummary, elementsAddons }: props) => {
  // console.log("array = ", arraySummary[0], elementsAddons);

  //conditions sur l'affichage du total des elemetsAddons
  let totalAddons = 0;
  if (
    arraySummary[0][0] === true &&
    arraySummary[0][1] === true &&
    arraySummary[0][2] === true &&
    arraySummary[2].price > 15
  ) {
    totalAddons =
      elementsAddons[0].price_year +
      elementsAddons[1].price_year +
      elementsAddons[2].price_year;
  } else if (
    arraySummary[0][0] === true &&
    arraySummary[0][1] === true &&
    arraySummary[0][2] === true &&
    arraySummary[2].price < 15
  ) {
    totalAddons =
      elementsAddons[0].price +
      elementsAddons[1].price +
      elementsAddons[2].price;
  } else if (
    arraySummary[0][0] === true &&
    arraySummary[0][1] === true &&
    arraySummary[2].price > 15
  ) {
    totalAddons = elementsAddons[0].price_year + elementsAddons[1].price_year;
  } else if (
    arraySummary[0][0] === true &&
    arraySummary[0][1] === true &&
    arraySummary[2].price < 15
  ) {
    totalAddons = elementsAddons[0].price + elementsAddons[1].price;
  } else if (arraySummary[0][0] === true && arraySummary[2].price > 15) {
    totalAddons = elementsAddons[0].price_year;
  } else if (arraySummary[0][0] === true && arraySummary[2].price < 15) {
    totalAddons = elementsAddons[0].price;
  }
  return (
    <div className="main flex flex-col gap-10">
      <div className="header">
        <Typography
          component="h1"
          size="large"
          className=" text-primary-marime-blue"
        >
          Finishing up
        </Typography>
        <Typography
          component="span"
          size="small"
          className=" text-neutral-cool-gray"
        >
          Double-check everything looks OK before confirming.
        </Typography>
      </div>
      <div className="body flex flex-col gap-10 w-[350px] rounded-lg">
        <div className="infos flex flex-col gap-2">
          <div className="up bg-neutral-alabaster p-4 rounded-lg gap-3 flex flex-col">
            <div className="flex justify-between items-start">
              <Typography
                component="h2"
                size="small"
                className=" text-primary-marime-blue font-bold flex flex-col capitalize text-xs "
              >
                {arraySummary[2].price > 15
                  ? arraySummary[2].title + ` (yearly)`
                  : arraySummary[2].title + ` (montly)`}
                <Typography
                  component="span"
                  size="extra-small"
                  className=" text-primary-purplish-blue text-[10px]"
                >
                  <button onClick={link} className=" hover:underline">
                    change
                  </button>
                </Typography>
              </Typography>
              <Typography
                component="span"
                size="small"
                className=" text-primary-marime-blue font-bold"
              >
                {arraySummary[2].price > 15
                  ? `$${arraySummary[2].price}/yr`
                  : `$${arraySummary[2].price}/mo`}
              </Typography>
            </div>
            <hr className="" />
            {arraySummary[0][0] === true && (
              <div className="flex justify-between gap-2">
                <Typography
                  component="h3"
                  size="extra-small"
                  className=" text-neutral-cool-gray"
                >
                  {arraySummary[0][0] === true && elementsAddons[0].title}
                </Typography>
                <Typography
                  component="h3"
                  size="extra-small"
                  className=" text-primary-marime-blue"
                >
                  {arraySummary[0][0] === true && arraySummary[2].price > 15
                    ? `$${elementsAddons[0].price_year} /yr`
                    : `$${elementsAddons[0].price} /mo`}
                </Typography>
              </div>
            )}

            {arraySummary[0][1] === true && (
              <div className="flex justify-between gap-2">
                <Typography
                  component="h3"
                  size="extra-small"
                  className=" text-neutral-cool-gray"
                >
                  {arraySummary[0][1] === true && elementsAddons[1].title}
                </Typography>
                <Typography
                  component="h3"
                  size="extra-small"
                  className=" text-primary-marime-blue"
                >
                  {arraySummary[0][1] === true && arraySummary[2].price > 15
                    ? `$${elementsAddons[1].price_year} /yr`
                    : `$${elementsAddons[1].price} /mo`}
                </Typography>
              </div>
            )}

            {arraySummary[0][2] === true && (
              <div className="flex justify-between gap-2">
                <Typography
                  component="h3"
                  size="extra-small"
                  className=" text-neutral-cool-gray"
                >
                  {arraySummary[0][2] === true && elementsAddons[2].title}
                </Typography>
                <Typography
                  component="h3"
                  size="extra-small"
                  className=" text-primary-marime-blue"
                >
                  {arraySummary[0][2] === true && arraySummary[2].price > 15
                    ? `$${elementsAddons[2].price_year} /yr`
                    : `$${elementsAddons[2].price} /mo`}
                </Typography>
              </div>
            )}
          </div>
          <div className="flex justify-between gap-2 p-4">
            <Typography
              component="h3"
              size="extra-small"
              className=" text-neutral-cool-gray"
            >
              {arraySummary[2].price > 15
                ? "Total (per year)"
                : "Total (per month)"}
            </Typography>
            <Typography
              component="h3"
              size="small"
              className=" text-primary-purplish-blue font-bold"
            >
              {arraySummary[2].price > 15
                ? `+$${totalAddons}/yr`
                : `+$${totalAddons}/mo`}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
