import { ContainerDesktop } from "@/components/container/container-desktop";
import { Button } from "@/components/steps/buttons/button";
import { Finalsms } from "@/components/steps/finalsmg";
import { AddonsInfo } from "@/components/steps/formInformations/addonsInfo";
import { PersonalInfo } from "@/components/steps/formInformations/personalInfo";
import { PlanInfo } from "@/components/steps/formInformations/planInfo";
import { SummaryInfo } from "@/components/steps/formInformations/summaryInfo";
import { Typography } from "@/iu/typography/typography";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  //tableau pour enregistrer les informations des differents steps
  const chooseInfos: any = []; //variable qui va stocker tous les elements choisis dans les step precedents pour les afficher dans le summary

  //useState pour changer le state des steps
  let [step, setStep] = useState(1);

  //fonction pour mettre a jour le step next
  const handleChangeStep = () => {
    setStep((s) => s + 1);
  };

  //fonction pour mettre a jour le step back
  const handleChangeStepBack = () => {
    setStep((s) => s - 1);
  };

  //fonction pour revenir au step 2
  const changePlan = () => {
    setStep((step = 2));
    // console.log(step);
  };

  // |----------------------------
  //   |useState planInfo          |
  //  |---------------------------
  //useState pour gerer le state des formulaire dans personalInfo
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //fonction de mise a jour des valeurs formData
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // |----------------------------
  // |        AddonsInfos       |
  // |---------------------------

  //tableau d'elements
  const elementsAddonsArray = [
    {
      id: 1,
      title: "Online service",
      sub_title: "Access to multiplayer games",
      price: 1,
      price_year: 10,
    },
    {
      id: 2,
      title: "Larger storage",
      sub_title: "Extra 1TB of cloud save",
      price: 2,
      price_year: 20,
    },
    {
      id: 3,
      title: "Customisable profile",
      sub_title: "Custom theme on your profile",
      price: 2,
      price_year: 20,
    },
  ]; //tableau d'elements qui servira dans le component addonsInfo pour les afficher en fonction de l'abonnement
  //fonction de changement d'etat: ici on a utilise une variable qui stockera la valeur de l'id de chacun des addons afin qu'ils soient independants les uns des autres,
  const [isCheckedAdons, setIsCheckedAdons] = useState<Record<string, any>>({}); //initialisation de l'etat : initialement, on a un tableau qui va contenir les valeurs de chaque addon

  const handleChangeCheckedAddons = (addonId: number) => {
    setIsCheckedAdons((prevState: Array<boolean>) => ({
      ...prevState, //recuperation des valeurs de chaque addon
      [addonId]: !prevState[addonId], // exemple de resultat : 1:false
    }));
  };

  //mapper les valeurs de isCheckedAdons

  const mapCheckedValues = () => {
    Object.keys(isCheckedAdons).forEach((key) => {
      // console.log(`${key}: ${isCheckedAdons[key]}`);
      // chooseInfos.push(isCheckedAdons);
    });
  };

  let elementsAddons: any = [];
  if (Object.keys(isCheckedAdons).length !== 0) {
    Object.keys(isCheckedAdons).forEach((key) => {
      elementsAddons.push(isCheckedAdons[key]);
    });
    chooseInfos.push(elementsAddons);
  }

  // |----------------------------
  // |          planInfo         |
  // |---------------------------
  //useState plan info
  const [isSelect, setIsSelect] = useState<number | null>(null);
  const handleChangeSelect = (id: number) => {
    setIsSelect(id);
  };
  //pour le bouton switch
  //lorsque isChecked=== false , valeur = Montly et lorsque isCheched === true , valeur = yearly
  const [isChecked, setIsChecked] = useState(false);
  const handleChangeChecked = () => {
    setIsChecked(!isChecked);
  };
  const selectValues = {
    /** la constante qui va stocker les infos choisies au step 2 */
    title: "",
    price: 0,
  };

  //conditions pour afficher les valeurs dans le component summaryInfo en fonction du type d'abonnement monthly=false ou yearly=true
  if (isSelect === 1 && isChecked === false) {
    selectValues.title = "Acarde";
    selectValues.price = 9;
  } else if (isSelect === 1 && isChecked === true) {
    selectValues.title = "Acarde";
    selectValues.price = 90;
  } else if (isSelect === 2 && isChecked === false) {
    selectValues.title = "Advanced";
    selectValues.price = 12;
  } else if (isSelect === 2 && isChecked === true) {
    selectValues.title = "Advanced";
    selectValues.price = 120;
  } else if (isSelect === 3 && isChecked === false) {
    selectValues.title = "Pro";
    selectValues.price = 15;
  } else if (isSelect === 3 && isChecked === true) {
    selectValues.title = "Pro";
    selectValues.price = 150;
  }
  // console.log(selectValues);

  //
  chooseInfos.push(formData, selectValues);
  // console.log(chooseInfos)

  // |----------------------------
  // |        Finishing Up        |
  // |---------------------------
  return (
    <div className="w-[100vw] h-[100vh] flex bg-neutral-magnolia">
      <ContainerDesktop stepHeader={step} className=" ml-20">
        <div className="main flex flex-col gap-10">
          {step === 1 && (
            <PersonalInfo
              handleChangeFunction={handleChange}
              formData={formData}
            />
          )}
          {step === 2 && (
            <PlanInfo
              handleChangeCheckedFunction={handleChangeChecked}
              handleChangeSelectFunction={handleChangeSelect}
              isChecked={isChecked}
              isSelect={isSelect}
            />
          )}
          {step === 3 && (
            <AddonsInfo
              handleCheckedChange={handleChangeCheckedAddons}
              isChecked={isCheckedAdons}
              elementsAddons={elementsAddonsArray}
              isCheckedPlan={isChecked}
            />
          )}
          {step === 4 && (
            <SummaryInfo
              link={changePlan}
              arraySummary={chooseInfos}
              elementsAddons={elementsAddonsArray}
            />
          )}
          {step === 5 && <Finalsms />}
          <div
            className={clsx(
              "flex items-end",
              step === 1 && "justify-end",
              step !== 1 && " justify-between",
              step > 4 && "hidden"
            )}
          >
            <Button
              onClick={handleChangeStepBack}
              type="button"
              color="neutral"
              className={clsx(step === 1 && " hidden")}
            >
              <Typography
                component="span"
                size="small"
                className={clsx(
                  "hover:text-primary-marime-blue transition-colors"
                )}
              >
                Go Back
              </Typography>
            </Button>
            <Button type="button" color="primary" onClick={handleChangeStep}>
              <Typography component="span" size="small">
                {step === 4 ? "confirm" : "Next step"}
              </Typography>
            </Button>
          </div>
        </div>
      </ContainerDesktop>
    </div>
  );
}
