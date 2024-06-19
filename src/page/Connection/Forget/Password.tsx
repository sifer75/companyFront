import { useState } from "react";
import Swire from "../../../assets/logoSwire.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../component/custom/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { forgetPassword } from "../../../lib/company.request";
function Password() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const mutation = useMutation({
    mutationFn: (data: {
      password1: string;
      password2: string;
      email: string;
    }) => forgetPassword(data),
    onError: (error) => {
      console.log("modification du mot de passe échouée", error);
    },
    onSuccess: () => {
      console.log("mot de passe changé");
      queryClient.invalidateQueries({ queryKey: ["Password"] });
      navigate("/");
    },
  });

  return (
    <div className="w-screen h-screen  px-16 py-20 flex items-center">
      <div className="h-full w-full flex flex-col justify-between bg-fontForget px-64 py-32">
        <div>
          <img loading="lazy" src={Swire} alt="logo swire"></img>
        </div>
        <div className="w-full flex justify-center ">
          <h1 className="text-gray-500 leading-tight text-top uppercase font-heebo text-base font-normal tracking-tighter">
            Can we have your password?
          </h1>
        </div>
        <input
          className="w-full outline-none bg-fontForget focus:border-black border-b-2 overflow-hidden text-Hifi-Color-Light-Grey leading-trim text-cap truncate font-Heebo text-lg font-light tracking-tighter"
          placeholder="Your new password"
          type="password"
          value={password1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword1(e.target.value)
          }
        ></input>

        <input
          className="w-full outline-none bg-fontForget focus:border-black border-b-2 overflow-hidden text-Hifi-Color-Light-Grey leading-trim text-cap truncate font-Heebo text-lg font-light tracking-tighter"
          placeholder="Confirm your new password"
          type="password"
          value={password2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword2(e.target.value)
          }
        ></input>
        <div className="flex w-full justify-end">
          <Button
            disabled={password1 === "" || password2 === ""}
            background={password1 === "" || password2 === "" ? "bg-fontButton/70" : "bg-fontButton"}
            image={true}
            onClick={() => {
              mutation.mutate({ password1, password2, email });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Password;
