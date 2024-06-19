import { useState } from "react";
import Swire from "../../../assets/logoSwire.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../../component/custom/Button";
function Email() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/forget/password", { state: { email } });
  };
  return (
    <div className="w-screen h-screen  px-16 py-20 flex items-center">
      <div className="h-full w-full flex flex-col justify-between bg-fontForget px-64 py-32">
        <div>
          <img loading="lazy" src={Swire} alt="logo swire"></img>
        </div>
        <div className="w-full flex justify-center ">
          <h1 className="text-gray-500 leading-tight text-top uppercase font-heebo text-base font-normal tracking-tighter">
            Can we have your email?
          </h1>
        </div>
        <input
          className="w-full outline-none bg-fontForget focus:border-black border-b-2 overflow-hidden text-Hifi-Color-Light-Grey leading-trim text-cap truncate font-Heebo text-lg font-light tracking-tighter"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div className="flex w-full justify-end">
          <Button
            disabled={email === ""}
            background={email === "" ? "bg-fontButton/70" : "bg-fontButton"}
            image={true}
            onClick={handleNavigate}
          />
        </div>
      </div>
    </div>
  );
}

export default Email;
