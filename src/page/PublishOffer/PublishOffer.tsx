import { Link } from "react-router-dom";
import Layout from "../../component/Layout/Layout";

function PublishOffer() {
  return (
    <Layout>
      <button className="w-1/2 h-full flex justify-center items-center flex-row border-4 shadow-selection border-borderSelection rounded-lg bg-white">
        <h1 className="text-lg text-semiblod text-textColor ">
          Quick Upload Input Job Offer
        </h1>
      </button>
      <Link
        to={"/publishoffer/form"}
        className="w-1/2 h-full flex justify-center items-center flex-row border-4 shadow-selection border-borderSelection rounded-lg bg-white"
      >
        <h1 className="text-lg text-semiblod text-textColor ease-out">
          Manual Input Job Offer
        </h1>
      </Link>
    </Layout>
  );
}

export default PublishOffer;
