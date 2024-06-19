import { useState } from "react";
import Layout from "../../component/Layout/Layout";
import PublishLayout from "../../component/Layout/PublishLayout";
import Button from "../../component/custom/Button";
import { form } from "../../lib/description.utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDescription } from "../../lib/job.request";
import { DescriptionProps } from "../../lib/jobs.utils";
import { Link, useParams } from "react-router-dom";
import { TextareaResizable } from "../../component/custom/Textarea";

function Description() {
  const queryClient = useQueryClient();
  const { jobId } = useParams<{ jobId: string }>();
  const [formData, setFormData] = useState<DescriptionProps>({
    jobDescription: "",
    mission: "",
    competence: "",
    description: "",
    value: "",
    jobId: jobId || "",
  });
  console.log(formData);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    key: string
  ) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const mutation = useMutation({
    mutationFn: (data: DescriptionProps) => createDescription(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      try {
        queryClient.invalidateQueries({ queryKey: ["job"] });
        console.log("Création de la description réussie");
      } catch (e) {
        console.error("Erreur lors de la création de la description");
      }
    },
  });
  return (
    <Layout>
      <div className="flex flex-col w-full h-full gap-12 justify-between">
        <PublishLayout
          state={[true, true, false, false, false]}
          title={"Confirm Job Offer Discerption and Company Info"}
        />
        <div className="bg-white rounded-lg border-4 shadow-selection flex-grow border-borderSelection w-full h-full grid grid-cols-2 p-12 gap-6 overflow-y-scroll">
          {form.map((form, index) => (
            <div key={index}>
              <p className="font-medium text-[#6F6F6F]">{form.title}</p>
              <TextareaResizable
                className="border-b-2 w-full outline-none focus:border-black h-fit"
                onChange={(e) => handleChange(e, form.value)}
                minheight={40}
              ></TextareaResizable>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <Link to={`/publishoffer/${jobId}/fields`}>
            <Button
              disabled={Object.values(formData).some((value) => value === "")}
              background={
                Object.values(formData).some((value) => value === "")
                  ? "bg-fontButton/70"
                  : "bg-fontButton"
              }
              image={true}
              onClick={() => {
                mutation.mutate({
                  jobId: formData.jobId,
                  jobDescription: formData.jobDescription,
                  competence: formData.competence,
                  description: formData.description,
                  mission: formData.mission,
                  value: formData.value,
                });
              }}
            ></Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Description;
