import { useMutation, useQueryClient } from "@tanstack/react-query";
import SwireLogo from "../../assets/logoSwire.svg";
import Image from "../../component/custom/Image";
import Input from "../../component/custom/Input";
import React, { useState } from "react";
import { createCompany, login } from "../../lib/company.request";
import { Link } from "react-router-dom";

interface formDataProps {
  email: string;
  password: string;
}

function CreateAccount() {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<formDataProps>({
    email: "",
    password: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const mutation = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      createCompany(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      try {
        await login({ email: formData.email, password: formData.password });

        queryClient.invalidateQueries({ queryKey: ["company"] });
        console.log("Création de la companie réussie");
      } catch (e) {
        console.error("Erreur lors de la connection de la companie");
      }
    },
  });

  return (
    <div className="w-screen h-screen bg-fontPage py-20 px-44">
      <div className="flex w-full h-full rounded-lg">
        <div className="bg-gradient-to-b from-gradientPink to-white w-1/2 h-full relative">
          <div className="absolute top-[33%] w-full h-48 flex flex-col items-center justify-between">
            <Image
              src={SwireLogo}
              alt="logo swire"
              className="w-[62px] h-[88px]"
            />
            <h1 className="text-titleSwire text-center font-heebo font-medium text-3xl tracking-[0.5px]">
              Talent at first sight.
            </h1>
          </div>
        </div>
        <div className="flex flex-col bg-white h-full w-1/2 gap-8 px-16 py-20 justify-center">
          <h1 className="text-buttonPurple font-bold text-2xl">Create Account</h1>
          {Object.entries(formData).map(([key, value], index) => (
            <React.Fragment key={index}>
              <Input
                key={key}
                placeholder={key === "email" ? "Email" : "Password"}
                value={value}
                onChange={(e) => handleChange(e, key)}
              />
            </React.Fragment>
          ))}
          <div className="flex justify-between">
            <Link
              to={"/forget/email"}
              className="text-textGray text-center leading-normal font-heebo font-medium tracking-wide underline"
            >
              Forget password?
            </Link>
          </div>
          <Link to={"/account"} className="flex justify-end">
            <button
              className={`flex py-1 px-2 flex-shrink-0 rounded-md shadow-md border-2 border-buttonPurple`}
              onClick={() => {
                mutation.mutate({
                  email: formData.email,
                  password: formData.password,
                });
              }}
            >
              <p className="text-buttonPurple text-xl font-medium">
                Create Account
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
