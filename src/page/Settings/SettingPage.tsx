import { useQuery } from "@tanstack/react-query";
import Layout from "../../component/Layout/Layout";
import {
  getJob,
  getUserJobLiked,
  getUserWhoLikedJob,
} from "../../lib/company.request";
import { useEffect, useState } from "react";
import { UserProps } from "../../lib/user.utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { JobProps } from "../../lib/jobs.utils";
import arrowR from "/arrow-right.svg";

function SettingPage() {
  const [classIndex, setClassIndex] = useState<boolean>(true);
  const [selectedJob, setSelectedJob] = useState<JobProps | null>(null);

  const handleOpenModal = (job: JobProps) => {
    setSelectedJob(job);
  };

  const {
    data: dataJobs = [],
    isError: jobError,
    isLoading: jobLoading,
  } = useQuery({
    queryKey: ["job"],
    queryFn: getJob,
  });

  const {
    data: dataUsers = [],
    isError: userError,
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserJobLiked,
  });

  const {
    data: usersWhoLikedJob = [],
    isError: errorUsersWhoLikedJob,
    isLoading: loadingUsersWhoLikedJob,
    refetch: refetchUsersWhoLikedJob,
  } = useQuery({
    queryKey: ["usersByJob", selectedJob?.id],
    queryFn: () =>
      selectedJob ? getUserWhoLikedJob(selectedJob.id) : Promise.resolve([]),
    enabled: !!selectedJob,
  });

  useEffect(() => {
    if (selectedJob) {
      refetchUsersWhoLikedJob();
    }
  }, [selectedJob, refetchUsersWhoLikedJob]);

  console.log(selectedJob, "1", usersWhoLikedJob);

  if (jobError || userError || errorUsersWhoLikedJob) return <div> error </div>;
  if (jobLoading || userLoading || loadingUsersWhoLikedJob)
    return <div> loading </div>;

  return (
    <Layout>
      <div className="w-full h-full flex flex-col">
        <div className="flex border-4 mb-8 border-fontPurple rounded-lg h-12 w-auto items-center justify-around">
          <div
            onClick={() => setClassIndex(true)}
            className={`w-full h-full flex items-center justify-center rounded-sm p-5 ${
              classIndex ? "bg-fontPurple text-white" : "text-black"
            }`}
          >
            Postes
          </div>
          <div
            onClick={() => setClassIndex(false)}
            className={`w-full h-full flex items-center justify-center rounded-sm p-5 ${
              !classIndex ? "bg-fontPurple text-white" : "text-black"
            }`}
          >
            Étudiants
          </div>
        </div>
        {classIndex ? (
          <div className="w-full flex flex-wrap h-full overflow-y-scroll gap-12 justify-center">
            {dataJobs.map((job: JobProps, index: number) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-1/4 h-1/3 justify-center items-center rounded-xl bg-fontPurple text-white"
                    onClick={() => handleOpenModal(job)}
                  >
                    {job.name}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{job.name}</DialogTitle>
                  </DialogHeader>
                  <div className="gap-4 py-4 w-full">
                    {loadingUsersWhoLikedJob ? (
                      <div>Chargement des utilisateurs...</div>
                    ) : errorUsersWhoLikedJob ? (
                      <div>Erreur lors de la récupération des utilisateurs</div>
                    ) : !Array.isArray(usersWhoLikedJob) ||
                      usersWhoLikedJob.length === 0 ? (
                      <div className="text-center ">
                        Aucun utilisateur n'a liké ce job.
                      </div>
                    ) : (
                      usersWhoLikedJob.map((user: UserProps) => (
                        <div
                          className="items-center gap-4 w-full flex justify-center"
                          key={user.id}
                        >
                          <Button className="flex justify-between gap-10 bg-gray-100 text-black border-2 border-gray-500 w-full"
                          onClick={"/"}>
                            {user.name}
                            <img src={arrowR} alt="arrow-right"></img>
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-wrap h-full overflow-y-scroll gap-12 justify-center">
            {dataUsers.map((user: UserProps, index: number) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-1/4 h-1/3 justify-center items-center rounded-xl bg-fontPurple text-white"
                  >
                    {user.name}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Modifier le profil</DialogTitle>
                    <DialogDescription>
                      Faites des modifications à votre profil ici. Cliquez sur
                      sauvegarder lorsque vous avez terminé.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Nom
                      </Label>
                      <Input
                        id="name"
                        defaultValue={user.name}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Nom d'utilisateur
                      </Label>
                      <Input
                        id="username"
                        defaultValue={user.name}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Sauvegarder les modifications</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default SettingPage;
