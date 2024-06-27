import { JobProps } from "@/lib/jobs.utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getUserWhoLikedJob } from "@/lib/company.request";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { UserProps } from "@/lib/user.utils";

export function Content({ jobId }: { jobId: number }) {
  const navigate = useNavigate();
  const {
    data,
    isError: errorUsersWhoLikedJob,
    isLoading: loadingUsersWhoLikedJob,
  } = useQuery({
    queryKey: ["usersByJob", jobId],
    queryFn: () => getUserWhoLikedJob(jobId),
  });

  if (errorUsersWhoLikedJob) {
    return <div>error</div>;
  }
  if (loadingUsersWhoLikedJob) {
    return <div>loading</div>;
  }
  if (data.usersWhoLikedJobs.length === 0) {
    return <div>No users liked this job</div>;
  }

  if (!data.usersWhoLikedJobs) {
    return null;
  }

  return data.usersWhoLikedJobs.map((user: UserProps, index: number) => (
    <div className="items-center gap-4 w-full flex justify-center" key={index}>
      <Button
        className="flex justify-between gap-10 bg-gray-100 text-black border-2 border-gray-500 w-full"
        onClick={() => {
          navigate(`/match/${user.id}`, { state: { user } });
        }}
      >
        {user.name}
        <ArrowRight size={16} />
      </Button>
    </div>
  ));
}

export function CompanyWorks({ job }: { job: JobProps }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-80 flex flex-row p-3 rounded-lg border h-32 gap-3">
          <img
            src={job.imageFont as any}
            alt={job.name}
            className="w-10 h-10 aspect-square rounded-full bg-red-500"
          ></img>
          <div className="flex flex-col h-full w-full overflow-hidden">
            <h1 className="text-lg font-bold">{job.name}</h1>
            <p className="text-sm">
              {/* {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(job.salary)} */}
            </p>
            <p className="text-sm">{job.location}</p>
            <p className="text-sm">{job.experience}</p>
            <div className="flex flex-row">
              {job.workRhythm.map((rhythm, index) => (
                <p key={index} className="text-sm">
                  {rhythm}
                </p>
              ))}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{job.name}</DialogTitle>
        </DialogHeader>
        <Content jobId={job.id} />
      </DialogContent>
    </Dialog>
  );
}

export default CompanyWorks;
