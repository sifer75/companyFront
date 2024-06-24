export interface JobProps {
  companyId: number | null;
  competence: string | null;
  createdAt: string;
  description: string | null;
  disponibility: string[];
  duration: string | null;
  experience: string | null;
  fieldOfStudy: string | null;
  fields: string[];
  id: number;
  imageFont: File | undefined;
  jobDescription: string | null;
  language: string;
  likes: { id: number; jobId: number; userId: number; reviewStatus: string; likeStatus: string }[];
  location: string;
  mission: string | null;
  name: string;
  question: string | null;
  salary: number | null;
  studyLevel: string | null;
  target: string[];
  updatedAt: string;
  value: string | null;
  workRhythm: string[];
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
