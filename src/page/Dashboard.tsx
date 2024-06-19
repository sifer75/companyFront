import { useState } from "react";
import { DashboardTypeList } from "../lib/dashboard.utils";
import Layout from "../component/Layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { getJob, getUserJobLikedCount } from "../lib/company.request";

function Dashboard() {
  const [dashboardItems, setDashboardItems] = useState(DashboardTypeList);
  const handleSelected = (index: number) => {
    const updateDashboardItems = dashboardItems.map((dashboardType, i) => ({
      ...dashboardType,
      disabled: i === index,
    }));
    setDashboardItems(updateDashboardItems);
  };
  const { data: jobData = [] } = useQuery({
    queryKey: ["job"],
    queryFn: getJob,
  });
  const {
    data: userData = {userNumber: 0},
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserJobLikedCount,
  });

  if (isError || isLoading) return <div>c'est pas bon</div>;
  
  const jobNumber = jobData.length;
  const userNumber = userData.userNumber;

  console.log(userNumber)

  return (
    <Layout>
      <div className="w-full h-full bg-white flex flex-col rounded-lg gap-12">
        <p className="text-textColor w-full">
          Welcome on board, Swire strives to find the best talent for you.
        </p>
        <div className="grid grid-cols-2 h-full w-full gap-8">
          {/* {dashboardItems.map((dashboard, index) => (
            <Selection
              key={index}
              disabled={dashboard.disabled}
              title={dashboard.name}
              value={
                dashboard.name === "Published Offer" ? jobNumber : userNumber
              }
              onClick={() => handleSelected(index)}
            />
          ))} */}
          <button
            className={`flex flex-col w-full h-full max-h-[410px] justify-center items-center border-4 border-borderSelection shadow-selection rounded-xl p-8 ${
              dashboardItems[0].disabled ? "bg-fontPurple" : "bg-fontWhite"
            }`}
            onClick={() => handleSelected(0)}
          >
            <p
              className={`font-medium text-2xl ${
                dashboardItems[0].disabled ? "text-white" : "text-textColor"
              } `}
            >
              {dashboardItems[0].name}
            </p>
            <p
              className={`text-2xl ${
                dashboardItems[0].disabled
                  ? "text-white"
                  : "text-valueSelection"
              }`}
            >
              {jobNumber}
            </p>
          </button>
          <button
            className={`flex flex-col w-full h-full max-h-[410px] justify-center items-center border-4 border-borderSelection shadow-selection rounded-xl p-8 ${
              dashboardItems[1].disabled ? "bg-fontPurple" : "bg-fontWhite"
            }`}
            onClick={() => handleSelected(1)}
          >
            <p
              className={`font-medium text-2xl ${
                dashboardItems[1].disabled ? "text-white" : "text-textColor"
              } `}
            >
              {dashboardItems[1].name}
            </p>
            <p
              className={`text-2xl ${
                dashboardItems[1].disabled
                  ? "text-white"
                  : "text-valueSelection"
              }`}
            >
              {userNumber}
            </p>
          </button>
          <button
            className={`flex flex-col w-full h-full max-h-[410px] justify-center items-center border-4 border-borderSelection shadow-selection rounded-xl p-8 ${
              dashboardItems[2].disabled ? "bg-fontPurple" : "bg-fontWhite"
            }`}
            onClick={() => handleSelected(2)}
          >
            <p
              className={`font-medium text-2xl ${
                dashboardItems[2].disabled ? "text-white" : "text-textColor"
              } `}
            >
              {dashboardItems[2].name}
            </p>
            <p
              className={`text-2xl ${
                dashboardItems[2].disabled
                  ? "text-white"
                  : "text-valueSelection"
              }`}
            >
              {0}
            </p>
          </button>
          <button
            className={`flex flex-col w-full h-full max-h-[410px] justify-center items-center border-4 border-borderSelection shadow-selection rounded-xl p-8 ${
              dashboardItems[3].disabled ? "bg-fontPurple" : "bg-fontWhite"
            }`}
            onClick={() => handleSelected(3)}
          >
            <p
              className={`font-medium text-2xl ${
                dashboardItems[3].disabled ? "text-white" : "text-textColor"
              } `}
            >
              {dashboardItems[3].name}
            </p>
            <p
              className={`text-2xl ${
                dashboardItems[3].disabled
                  ? "text-white"
                  : "text-valueSelection"
              }`}
            >
              {0}
            </p>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
