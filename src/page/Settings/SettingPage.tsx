import { useQuery } from "@tanstack/react-query";
import Layout from "../../component/Layout/Layout";
import { getJob } from "../../lib/company.request";
import CompanyWorks from "./CompanyWork";
import { JobProps } from "@/lib/jobs.utils";

function SettingPage() {
  const {
    data: dataJobs = [],
    isError: jobError,
    isLoading: jobLoading,
  } = useQuery({
    queryKey: ["job"],
    queryFn: getJob,
  });

  if (jobError) return <div> error </div>;
  if (jobLoading) return <div> loading1 </div>;

  return (
    <Layout>
      <div className="w-full h-full flex flex-col gap-5">
        <h1 className="text-3xl font-medium">Company Works</h1>
        <div className="flex flex-row gap-5 flex-wrap">
          {dataJobs.map((job: JobProps) => (
            <CompanyWorks key={job.id} job={job} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default SettingPage;
