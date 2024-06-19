import React, { useState } from "react";
import Layout from "../../component/Layout/Layout";
import PublishLayout from "../../component/Layout/PublishLayout";
import Button from "../../component/custom/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJob } from "../../lib/job.request";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../component/custom/Checkbox";
import { JobProps } from "../../lib/jobs.utils";
import {
  disponibilityOptions,
  fieldOptions,
  targetOptions,
  workRhythmOptions,
} from "../../lib/form.utils";

function Form() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [salary, setSalary] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [workRhythm, setWorkRhythm] = useState<string[]>([]);
  const [target, setTarget] = useState<string[]>([]);
  const [disponibility, setDisponibility] = useState<string[]>([]);
  const [fields, setFields] = useState<string[]>([]);
  const [imageFont, setImageFont] = useState<File | undefined>();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handleSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setSalary(value);
  };

  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocation(value);
  };

  const handleLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLanguage(value);
  };

  const handleTarget = (value: string) => {
    setTarget((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleFields = (value: string) => {
    setFields((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleDisponibility = (value: string) => {
    setDisponibility((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleWorkRhythm = (value: string) => {
    setWorkRhythm((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleUploadImageFont = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImageFont(file);
    }
  };

  const mutation = useMutation({
    mutationFn: (data: JobProps) => createJob(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async (data) => {
      try {
        const jobId = data.id;
        navigate(`/publishoffer/${jobId}/description`);
        queryClient.invalidateQueries({ queryKey: ["job"] });
        console.log("Création de la companie réussie");
      } catch (e) {
        console.error("Erreur lors de la connection de la companie");
      }
    },
  });

  return (
    <Layout>
      <div className="flex flex-col w-full h-full gap-12">
        <PublishLayout
          state={[true, false, false, false, false]}
          title={"Confirm Your Job Offer Info"}
        />
        <div className="bg-white rounded-lg border-4 shadow-selection border-borderSelection w-full h-full grid grid-cols-2 p-12 gap-6 overflow-y-scroll">
          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#6F6F6F]">Job Title</p>
            <input
              className="border-b-2 w-full outline-none focus:border-black"
              onChange={(e) => handleName(e)}
              placeholder="job name"
            ></input>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#6F6F6F]">Salary</p>
            <input
              className="border-b-2 w-full outline-none focus:border-black"
              placeholder="/€"
              onChange={(e) => handleSalary(e)}
            ></input>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#6F6F6F]">Location</p>
            <input
              className="border-b-2 w-full outline-none focus:border-black"
              onChange={(e) => handleLocation(e)}
              placeholder="paris"
            ></input>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#6F6F6F]">Language</p>
            <input
              className="border-b-2 w-full outline-none focus:border-black"
              onChange={(e) => handleLanguage(e)}
              placeholder="français"
            ></input>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#6F6F6F]">Target</p>
            <div className="flex gap-1 flex-col">
              {targetOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  isChecked={target.includes(option.value)}
                  onClick={() => handleTarget(option.value)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#6F6F6F]">Fields</p>
            <div className="flex gap-1 flex-col">
              {fieldOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  isChecked={fields.includes(option.value)}
                  onClick={() => handleFields(option.value)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#6F6F6F]">Job Options</p>
            <div className="flex gap-1 flex-col">
              {disponibilityOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  isChecked={disponibility.includes(option.value)}
                  onClick={() => handleDisponibility(option.value)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#6F6F6F]">Work Rhythm</p>
            <div className="flex gap-1 flex-col">
              {workRhythmOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  isChecked={workRhythm.includes(option.value)}
                  onClick={() => handleWorkRhythm(option.value)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#6F6F6F]">Image Background</p>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => handleUploadImageFont(e)}
            ></input>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Button
            disabled={
              !name ||
              !salary ||
              !location ||
              !language ||
              workRhythm.length === 0 ||
              !target ||
              !fields ||
              !disponibility ||
              !imageFont
            }
            background={
              !name ||
              !salary ||
              !location ||
              !language ||
              workRhythm.length === 0 ||
              !target ||
              !fields ||
              !disponibility ||
              !imageFont
                ? "bg-fontButton/70"
                : "bg-fontButton"
            }
            image={true}
            onClick={() => {
              mutation.mutate({
                name: name,
                salary: salary,
                location: location,
                workRhythm: workRhythm,
                imageFont: imageFont,
                target: target,
                fields: fields,
                disponibility: disponibility,
                language: language,
              });
            }}
          ></Button>
        </div>
      </div>
    </Layout>
  );
}

export default Form;
