import { useState } from "react";
import Button from "../../component/custom/Button";
import Layout from "../../component/Layout/Layout";
import PublishLayout from "../../component/Layout/PublishLayout";
import {
  studyLevelOptions,
  experienceOptions,
  durationOptions,
  fieldOfStudyOptions,
} from "../../lib/fields.utils";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMatchCriterion } from "../../lib/job.request";
import { MatchCriterion } from "../../lib/jobs.utils";
import Checkbox from "../../component/custom/Checkbox";

function Field() {
  const queryClient = useQueryClient();
  const { jobId } = useParams<{ jobId: string }>();
  const [studyLevel, setStudyLevel] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [duration, setDuration] = useState<string[]>([]);
  const [fieldOfStudy, setFieldOfStudy] = useState<string[]>([]);
  const fieldSelected = () => {
    return (
      studyLevel.length > 0 &&
      experience.length > 0 &&
      duration.length > 0 &&
      fieldOfStudy.length > 0
    );
  };
  console.log(studyLevel, experience, duration, fieldOfStudy);

  const handleStudyLevel = (value: string) => {
    setStudyLevel((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

  const handleExperience = (value: string) => {
    setExperience((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

  const handleDuration = (value: string) => {
    setDuration((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

  const handleFieldOfStudy = (value: string) => {
    setFieldOfStudy((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

  const mutation = useMutation({
    mutationFn: (data: { values: MatchCriterion; id: string }) =>
      createMatchCriterion(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async (data) => {
      console.log(data, "sssss");
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
      <div className="flex flex-col w-full h-full gap-12">
        <PublishLayout
          state={[true, true, true, false, false]}
          title={"Select Your Match Criterion"}
        />
        <div className="grid grid-cols-2 h-full w-full gap-8">
          <div className="flex shadow-selection border-lg border-2 p-5 gap-1 border-borderSelection flex-col justify-between rounded-lg">
            <p className="bg-fontPurple text-white rounded-lg p-2 w-fit h-6 items-center flex">
              Study Level
            </p>
            {studyLevelOptions.map((option, index) => (
              <Checkbox
                key={index}
                label={option.name}
                isChecked={studyLevel.includes(option.value)}
                onClick={() => handleStudyLevel(option.value)}
              />
            ))}
          </div>
          <div className="flex shadow-selection border-lg border-2 p-5 gap-1 border-borderSelection flex-col justify-between rounded-lg">
            <p className="bg-fontPurple text-white rounded-lg p-2 w-fit h-6 items-center flex">
              Years of Experience
            </p>
            {experienceOptions.map((option) => (
              <Checkbox
                key={option.value}
                label={option.name}
                isChecked={experience.includes(option.value)}
                onClick={() => handleExperience(option.value)}
              />
            ))}
          </div>
          <div className="flex shadow-selection border-lg border-2 p-5 gap-1 border-borderSelection flex-col justify-between rounded-lg">
            <p className="bg-fontPurple text-white rounded-lg p-2 w-fit h-6 items-center flex">
              Internship Duration
            </p>
            {durationOptions.map((option, index) => (
              <Checkbox
                key={index}
                label={option.name}
                isChecked={duration.includes(option.value)}
                onClick={() => handleDuration(option.value)}
              />
            ))}
          </div>
          <div className="flex shadow-selection border-lg border-2 p-5 gap-1 border-borderSelection flex-col justify-between rounded-lg">
            <p className="bg-fontPurple text-white rounded-lg p-2 w-fit h-6 items-center flex">
              Field of Study
            </p>
            {fieldOfStudyOptions.map((option, index) => (
              <Checkbox
                key={index}
                label={option.name}
                isChecked={fieldOfStudy.includes(option.value)}
                onClick={() => handleFieldOfStudy(option.value)}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Link to={`/publishoffer/${jobId}/question`}>
            <Button
              disabled={!fieldSelected()}
              background={
                !fieldSelected() ? "bg-fontButton/70" : "bg-fontButton"
              }
              image={true}
              onClick={() => {
                mutation.mutate({
                  values: {
                    studyLevel: studyLevel,
                    experience: experience,
                    duration: duration,
                    fieldOfStudy: fieldOfStudy,
                  },
                  id: jobId || "",
                });
              }}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Field;
