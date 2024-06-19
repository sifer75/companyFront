export interface JobProps {
  name: string;
  salary: number;
  location: string;
  language: string;
  workRhythm: string[];
  target: string[];
  disponibility: string[];
  fields: string[];
  imageFont?: File;
}

export interface DescriptionProps {
  jobId: string;
  jobDescription: string;
  mission: string;
  competence: string;
  description: string;
  value: string;
}

export interface MatchCriterion {
  studyLevel: string[];
  experience: string[];
  duration: string[];
  fieldOfStudy: string[];
}
