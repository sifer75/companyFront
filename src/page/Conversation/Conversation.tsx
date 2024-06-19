import Layout from "../../component/Layout/Layout";
import State from "../../component/Layout/State";
import Check from "../../component/conversation/Check";
import Button from "../../component/custom/Button";

function Conversation() {
  const checks = [true, false, false];
  const check = ["Matched", "Interview", "Feedback"];
  return (
    <Layout>
      <div className="w-full h-full flex gap-8">
        <div className="bg-white rounded-lg border-4 border-borderSelection w-1/3 h-full p-8 gap-6 flex flex-col">
          <h2 className="w-full text-[#1A1A1A] font-medium">
            Your Matched Talents (3)
          </h2>
          <div className="flex w-full gap-2 items-center">
            <div>
              <div className="w-16 h-16 border-2 rounded-2xl shadow-matched flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="w-full">
              <p>Candidate 001 - UX /UI</p>
              <div className="flex-1 flex">
                {checks.map((task: boolean, index: number) => (
                  <State key={index} task={task} />
                ))}
              </div>
              <div>Matched</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border-4 border-borderSelection w-2/3 h-full p-8 gap-6 flex flex-col">
          <div className="w-full h-20 flex justify-between border-b-2">
            {check.map((item, index) => (
              <Check key={index} name={item} isChecked={checks[index]} />
            ))}
          </div>
          <div className="flex flex-col justify-between items-center h-full w-full">
            <h1 className="flex justify-center w-2/3">
              You matched with Candidate 001 for UX Designer Internship on
              February 23rd.
            </h1>
            <div className="flex justify-center w-full">
              <div className="w-20 h-20 border-2 rounded-2xl shadow-matched flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="flex justify-center w-full">
                Do you want to schedule an interview with this candidate?
              </p>
              <p className="flex justify-center w-full">
                (Scheduling will be proceeded only if both of you agree)
              </p>
              <div className="flex justify-around">
                <button
                  className={`flex py-1 px-2 justify-center w-24 items-center flex-shrink-0 rounded-md shadow-md border-2 border-buttonPurple`}
                >
                  <p className="text-buttonPurple text-xl font-medium">No</p>
                </button>
                <Button
                  background={"bg-fontButton"}
                  image={false}
                  // onClick={() => {
                  //   mutationLogin.mutate({
                  //     email: formData.email,
                  //     password: formData.password,
                  //   });
                  // }}
                  text={"Yes"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Conversation;
