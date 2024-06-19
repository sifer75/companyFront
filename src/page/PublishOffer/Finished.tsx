import { Link } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import PublishLayout from "../../component/Layout/PublishLayout";
import Button from "../../component/custom/Button";
import logoCheck from "../../assets/logoCheck.svg";

function Finished() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full gap-8">
        <PublishLayout
          state={[true, true, true, true, true]}
          title={"You are all set!"}
        />
        <div className="flex shadow-selection w-full h-full border-lg border-2 p-5 border-borderSelection items-center flex-col justify-center gap-8 rounded-lg px-12">
          <p className="text-center font-semibold text-2xl text-[#6F6F6F] leading-10	">
            Your offer is published! You can check all your published offer in
            dashboard.
          </p>
          <img src={logoCheck} alt="logo checked"></img>
        </div>

        <div className="w-full flex justify-end">
          <Link to={`/dashboard`}>
            <Button
              background={"bg-fontButton"}
              image={false}
              text={"Finish"}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Finished;
