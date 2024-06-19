import { useQuery } from "@tanstack/react-query";
import Layout from "../../component/Layout/Layout";
import { getJob, getUserJobLiked } from "../../lib/company.request";
import { useState } from "react";
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

function SettingPage() {
  const [classIndex, setClassIndex] = useState<boolean>(true);

  const {
    data: dataJobs = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["job"],
    queryFn: getJob,
  });

  const { data: dataUsers = [] } = useQuery({
    queryKey: ["user"],
    queryFn: getUserJobLiked,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

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
            postes
          </div>
          <div
            onClick={() => setClassIndex(false)}
            className={`w-full h-full flex items-center justify-center rounded-sm p-5 ${
              !classIndex ? "bg-fontPurple text-white" : "text-black"
            }`}
          >
            étudiants
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
                  >
                    {job.name}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-wrap h-full overflow-y-scroll gap-12 justify-center">
            {dataUsers.map((user: UserProps, index: number) => (
              // <Dialog key={index}>
              //   <DialogTrigger asChild>
              //     <Button
              //       variant="outline"
              //       className="w-1/4 h-1/3 justify-center items-center rounded-xl bg-fontPurple text-white"
              //     >
              //       {user.name}
              //     </Button>
              //   </DialogTrigger>
              //   <DialogContent className="sm:max-w-[425px]">
              //     <DialogHeader>
              //       <DialogTitle>Edit profile</DialogTitle>
              //       <DialogDescription>
              //         Make changes to your profile here. Click save when you're done.
              //       </DialogDescription>
              //     </DialogHeader>
              //     <div className="grid gap-4 py-4">
              //       <div className="grid grid-cols-4 items-center gap-4">
              //         <Label htmlFor="name" className="text-right">
              //           Name
              //         </Label>
              //         <Input
              //           id="name"
              //           defaultValue="Pedro Duarte"
              //           className="col-span-3"
              //         />
              //       </div>
              //       <div className="grid grid-cols-4 items-center gap-4">
              //         <Label htmlFor="username" className="text-right">
              //           Username
              //         </Label>
              //         <Input
              //           id="username"
              //           defaultValue="@peduarte"
              //           className="col-span-3"
              //         />
              //       </div>
              //     </div>
              //     <DialogFooter>
              //       <Button type="submit">Save changes</Button>
              //     </DialogFooter>
              //   </DialogContent>
              // </Dialog>
              <div>coucou</div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default SettingPage;
