import { DescriptionProps, JobProps, MatchCriterion } from "./jobs.utils";

const convertToBase64 = (File: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = () => {
      reject(new Error("Erreur lors de la lecture du fichier"));
    };

    reader.readAsDataURL(File);
  });
};

export const createJob = async (data: JobProps) => {
  if (!data.imageFont) return;
  const imageFontBase64 = await convertToBase64(data.imageFont);
  const requestData = { ...data, imageFont: imageFontBase64 };
  console.log(requestData, "data");
  const response = await fetch("http://localhost:3333/company/job/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(requestData),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création du job");
  }
  return response.json();
};

export const createDescription = async (data: DescriptionProps) => {
  const response = await fetch(
    `http://localhost:3333/job/${data.jobId}/updatedescription`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la création de la description du job");
  }
  return response.json();
};

export const createMatchCriterion = async ({
  values,
  id,
}: {
  values: MatchCriterion;
  id: string;
}) => {
  const response = await fetch(`http://localhost:3333/job/${id}/updatematch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création des critères");
  }
  return response.json();
};

export const createQuestion = async ({
  value,
  id,
}: {
  value: string;
  id: string;
}) => {
  const response = await fetch(
    `http://localhost:3333/job/${id}/createquestion`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: value }),
    }
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la création des critères");
  }
  return response.json();
};

export const getQuestion = async (jobId: string) => {
  const response = await fetch(
    `http://localhost:3333/job/${jobId}/getquestion`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la création des critères");
  }
  return response.json();
};

export const deleteJob = async () => {
  const response = await fetch("http://localhost:3333/job/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: null,
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la supression du job");
  }
  return response.json();
};
