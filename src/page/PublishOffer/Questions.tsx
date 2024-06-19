import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Layout from "../../component/Layout/Layout";
import Button from "../../component/custom/Button";
import question from "../../assets/question.svg";
import { useState } from "react";
import { createQuestion, getQuestion } from "../../lib/job.request";
import { Link, useParams } from "react-router-dom";
import PublishLayout from "../../component/Layout/PublishLayout";
import { TextareaResizable } from "../../component/custom/Textarea";

function Questions() {
  const [inputData, setInputData] = useState<string>("");
  console.log(inputData);
  const { jobId = "" } = useParams<{ jobId: string }>();
  const queryClient = useQueryClient();
  const mutationQuestion = useMutation({
    mutationFn: (data: { value: string; id: string }) => createQuestion(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async (data) => {
      console.log(data, "sssss");
      try {
        queryClient.invalidateQueries({ queryKey: ["job"] });
        console.log("Création de la description réussie");
        setInputData("");
        await refetchQuestions();
      } catch (e) {
        console.error("Erreur lors de la création de la description");
      }
    },
  });

  const refetchQuestions = async () => {
    queryClient.invalidateQueries({ queryKey: ["question"] });
    queryClient.refetchQueries({ queryKey: ["question"] });
  };

  const { data: fetchedQuestions } = useQuery({
    queryKey: ["question"],
    queryFn: () => getQuestion(jobId),
  }) as { data: string[] };
  const handlequestions = (value: string) => {
    setInputData(value);
  };

  if (!fetchedQuestions) {
    return <div>ya soucis...</div>;
  }

  return (
    <Layout>
      <div className="flex overflow-hidden flex-col w-full h-full gap-12">
        <PublishLayout
          state={[true, true, true, true, false]}
          title={"Add Offer-based Notes"}
        />
        <div className="grid overflow-hidden grid-cols-2 h-full w-full gap-8 grow">
          <div className="flex h-full border-lg border-2 border-borderSelection items-center flex-col justify-between rounded-lg gap-5 p-8 overflow-y-scroll">
            <TextareaResizable
              value={inputData}
              minheight={40}
              className="w-full h-full focus:border-black border border-gray-300 rounded-md p-2 focus:outline-black overflow-y-scroll"
              placeholder="You can write down your perfect intern description here"
              onChange={(e) => handlequestions(e.target.value)}
            ></TextareaResizable>
            <button
              className={`flex px-3 py-1 gap-1 text-xl justify-center items-center flex-shrink-0 rounded-md shadow-md ${
                inputData === "" ? "bg-fontButton/70" : "bg-fontButton"
              }`}
              disabled={inputData === ""}
              onClick={() => {
                mutationQuestion.mutate({
                  value: inputData,
                  id: jobId || "",
                });
              }}
            >
              <p className="text-white">New Question</p>
              <img src={question} alt="logo question" />
            </button>
          </div>
          <div className="flex w-full h-full border-lg border-2 p-5 border-borderSelection flex-col gap-8 rounded-lg overflow-y-scroll">
            {fetchedQuestions.map((question: string, index: number) => (
              <p
                className="w-full border-b-2 border-gray-300 break-words"
                key={index}
              >
                {question}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Link to={`/publishoffer/finished`}>
            <Button background={"bg-fontButton"} image={true} />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Questions;
